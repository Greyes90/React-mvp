DROP TABLE IF EXISTS games;

CREATE TABLE games (
    games_id serial PRIMARY KEY,
    title text,
    prevSave text, 
    genre text
    
);