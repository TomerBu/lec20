import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoaderSpinner from "./components/LoaderSpinner";
import TopNav from "./components/nav/TopNav";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";

function App() {
 
  return (
    <>
      <TopNav/>
      <LoaderSpinner/>
      <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/movies/:movieId" element={<MovieDetails/>} />
      </Routes>
    </>
  );
}

export default App;
