import React, {useState, useEffect} from 'react';
import StreamProvider from './Stream';
import apiKey from './api';

const imgURL = "https://image.tmdb.org/t/p/w500";

export default function Movie(props){
    const [providers, setProviders] = useState([]);

    async function getMovieProvider(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/watch/providers?api_key=${apiKey}`, {mode: "cors"});
        let movieData = await response.json();
        movieData = movieData.results?.US;
        let movies = [];

        //Check to see if there is an array of streaming providers for the movie
        //If so, add it to the array
        if(movieData?.flatrate === undefined){
            console.log('Not Available');
        } else {
            movies = movieData.flatrate.map(movie => <StreamProvider logo={movie.logo_path} />)
        }
        
        setProviders(movies);
    }

    useEffect(() => {
        getMovieProvider();
      }, []);
    

    return(
        <div className="movie">
            {props.image === null 
            ? <div className="poster">{props.title}</div> :
            <img className="poster" src={imgURL+props.image} alt={props.title}></img>}
            <div className="slide-up">
                <div className="stream-container">{providers}</div>
            </div>
        </div>
    )
}