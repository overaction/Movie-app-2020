import React from 'react';
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

const Movie = ({ title, poster_path, overview, vote_average, setVote}) => (
  <div className="movie">
    <img src={(poster_path ? IMG_PATH +poster_path : "https://pht.qoo-static.com/HQ_yGW5ZTPFilafXKljCV-s3i3ZWsQpaCX02Te1WPNzdZyKhGSAzixV8CihsFlrNTaE=w300-rw")} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVote(vote_average)}`}>{vote_average}</span>
    </div>
    <div className="movie-over">
      <h2>{title}</h2>
      <p>{overview === '' ? 'No overview' : overview}</p>
    </div>
  </div>
);

export default Movie;
