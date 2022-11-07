const { response } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const { restart } = require("nodemon");
const { Client } = require("pg");

const PORT = 3006;

//middleware
app.use(cors());
app.use(express.json()); // Allows to access req.body

const client = new Client({
  host: "localhost",
  post: 5432,
  user: "postgres",
  password: "docker",
  database: "gamesdb",
});

client.connect();

//ROUTES

//Get all games
app.get("/api/games/all", (req, res) => {
  client.query("SELECT * FROM games", (error, results) => {
    if (error) {
      console.error(error);
    } else {
      res.send(results.rows);
    }
  });
});

//edit a game to finish
app.patch("/api/games/edit", (req, res) => {
  client.query(
    "UPDATE games SET title = $1, presave = $2, genre $3 WHERE games_id = $4",
    [req.body.title, req.body.prevsave, req.body.genre, req.body.games_id],
    (error, results) => {
      if (error) {
        console.error(error);
      } else {
        res.send("Game upated");
      }
    }
  );
});

//Add a game
app.post("/api/games/update", (req, res) => {
  let { title, prevsave, genre } = req.body;
  client.query(
    "INSERT INTO games (title, prevsave, genre) VALUES ($1, $2, $3 ) RETURNING *",
    [title, prevsave, genre],
    (error, results) => {
      if (error) {
        console.error(error);
      } else {
        res.send("Added to you Gamelist");
        //alert("Added to you Gamelist");
      }
    }
  );
});
//Delete a game once completed
app.delete("/api/games/:id", (req, res) => {
  client.query(
    "DELETE FROM games WHERE games_id = ($1)",
    [req.params.id],
    (error, results) => {
      if (error) {
        console.error(error);
      } else {
        res.send("Game Completed");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log("Listening to REACT mvp back end http://localhost:3006");
});
