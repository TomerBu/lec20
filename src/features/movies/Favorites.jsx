import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((s) => s.movie.favoriteMovies);
  console.log(favorites); //[]
  return (
    <>
      {favorites.map((m) => (
        <div key={m.id}>
          <h2>{m.title}</h2>
          <p>{m.overview}</p>
          <button onClick={() => {}}>Remove from Favorites</button>
        </div>
      ))}
    </>
  );
};

export default Favorites;
