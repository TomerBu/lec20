import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMovies, addFavorite } from "./movies-slice";
const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b3b1492d3e91e9f9403a2989f3031b0c&language=he-il&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((json) => json.results)
      .then((movies) => {
        dispatch(addMovies(movies));
      });
  }, [dispatch]);
  const movies = useSelector((s) => s.movie.movies);
  const isDark = useSelector((s) => s.theme.isDark);

  //rtl should be in index.css
  return (
    <div style={{ direction: "rtl" }}>
      {movies.map((m) => (
        <div key={m.id}>
          <h2>{m.title}</h2>
          <p>{m.overview}</p>
          <button onClick={()=>{
            dispatch(addFavorite(m));
          }} >Add To Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default Movies;
