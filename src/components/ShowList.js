import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>TV Shows</h2>
      <div className="ShowList">
        {shows.map((item) => {
          const show = item.show;
          return (
            <div key={show.id} className="box">
              <h3 style={{ textAlign: "center" }}>{show.name}</h3>
              <img
                style={{ marginLeft: "10%" }}
                src={show.image?.medium}
                alt={show.name}
              />
              <ul>
                <li>
                  <strong>Language:</strong> {show.language}
                </li>
                <li>
                  <strong>Genres:</strong> {show.genres}
                </li>
                <li>
                  <strong>Status:</strong> {show.status}
                </li>
                <li>
                  <strong>Premiered:</strong> {show.premiered}
                </li>
                <li>
                  <strong>Rating:</strong>
                  {show.rating.average ? show.rating.average : "N/A"}
                </li>
                <li>
                  <strong>Network:</strong>{" "}
                  {show.network ? show.network.name : "N/A"}
                </li>
              </ul>
              <Link to={`/summary/${show.id}`}>
                <button>View Summary</button>
              </Link>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default ShowList;
