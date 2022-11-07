import React, { Fragment, useState, useEffect } from "react";


const ListGames = () => {
  const [title, setTitle] = useState([]);
  const [prevsave, setPrevsave] = useState([]);
  const [genre, setGenre] = useState([]);

  //delete to do function
  // useEffect((id) => {
  //   fetch(`http://localhost:3006/api/games/${id}`, 
  //   {method: 'DELETE'})
  //   .then(() => setStatus("Game Completed"));
  // }, []);


  useEffect(() => {
    fetch("http://localhost:3006/api/games/all")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTitle(result);
      });
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 table-success table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Notes</th>
            <th scope="col">Genre</th>
            <th scope="col">Opt1</th>
            <th scope="col">Opt2</th>
          </tr>
        </thead>
        <thead></thead>
        <tbody>
          {title.map((data) => (
            <tr key={data.data_id}>
              <td>{data.title}</td>
              <td>{data.prevsave}</td>
              <td>{data.genre}</td>
              <td>
                <button className="btn btn-info"> Edit</button>
              </td>
              <td>
                <button
                  className="btn btn-danger">Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListGames;
