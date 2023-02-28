import "./Main.css";
import { useEffect, useState } from "react";
import LatestMovies from  './latestMovies'
import Filter from "./filter";
import { motion,AnimatePresence } from "framer-motion";

function Index() {
  const [latest, setLatest] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [activeGenre,setActiveGenre] = useState ([0]);

  useEffect(() => {
    fetchLatest();
  }, []);

  const fetchLatest = async () => {
    const data = await fetch(
      
      "https://api.themoviedb.org/3/movie/popular?api_key=ffafebf8df6d75a03f29d4d9c3eb96e5&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies);
    setLatest(movies.results);
    setFiltered(movies.results);

  };

  return (
    <div>
    <Filter latest={latest} setFiltered={setFiltered}
    activeGenre={activeGenre}
    setActiveGenre={setActiveGenre}
    />
        <motion.div layout className="latest-movies">
      <AnimatePresence>
          {filtered.map((movie) => (
            <LatestMovies key={movie.id} movie={movie} />
          ))}
      </AnimatePresence>
        </motion.div>
    </div>
  );
}

export default Index;
