import React, { Fragment, useState } from "react";

const InputGames = () => {
  const [title, setTitle] = useState("");
  const [prevsave, setPrevsave] = useState("");
  const [genre, setGenre] = useState("");
  //console.log(title);

  const onSubmitForm = (e) => {
    e.preventDefault();
    try {
      const body = { title, prevsave, genre };
      fetch("http://localhost:3006/api/games/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setTitle("");
      setPrevsave("");
      setGenre("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 style={{ backgroundColor: "lightblue" }} className="text-center my-5">
        {" "}
        Game List To Finish
      </h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Add Game"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Notes"
          className="form-control"
          value={prevsave}
          onChange={(e) => setPrevsave(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Genre"
          className="form-control"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button className="btn btn-primary"> Add</button>
      </form>
    </Fragment>
  );
};

export default InputGames;
