import React from "react";
import "./latestMovies.css";
import { motion } from "framer-motion";

function latestMovies({ movie }) {
  return (
    <motion.div 
    layout 
    animate={{opacity:1,scale: 1}}
    initial={{opacity:0,scale: 0}}
    exit={{opacity:0,scale: 0}}
    >
      <h2 className="latest-movies-title">{movie.title}</h2>
      <motion.img
        className="movie"
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="poster"
        whileHover={{ scale: 1.05 }}
      />
    </motion.div>
  );
}

export default latestMovies;
