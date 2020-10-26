import React from 'react';
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={IMG_PATH + poster_path} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
    <div className="movie-over">
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
