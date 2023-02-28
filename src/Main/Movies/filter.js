import React, { useEffect } from "react";
import "./style.css";

function Filter({ setActiveGenre, activeGenre, setFiltered, latest }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(latest);
      return;
    }
    const filtered = latest.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, setFiltered, latest]);

  return (
    <div>
      <div className="filter-container">
        <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
        <button className={activeGenre === 35 ? "active" : ""}  onClick={() => setActiveGenre(35)}>Action</button>
        <button className={activeGenre === 28 ? "active" : ""}  onClick={() => setActiveGenre(28)}>Comedy</button>
      </div>
    </div>
  );
}

export default Filter;
