import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=9fb7a0bacca5550e66bf3fba29f5ba46&language=ko&page=1®ion=KR`
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=9fb7a0bacca5550e66bf3fba29f5ba46&query=`
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`

const getMoviePromise = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const movieResp = await fetch(url);
            const movieR = await movieResp.json();
            resolve(movieR); 
        },1000);
    })
}

const App = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const FetchMovies = async () => {
            const Moviedata = await getMoviePromise(API_URL);
            console.log(Moviedata);
            setMovies(Moviedata.results);
        }
        FetchMovies();
    },[]);

    return (
        <div>
            {movies.length > 0 && movies.map((movie) => (
                <Movie />
            ))}
        </div>
    )
}

export default App;