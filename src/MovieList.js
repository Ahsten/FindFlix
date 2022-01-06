import { useEffect, useState } from "react";
import Movie from "./MovieCard";

const apiKey = "a640e406d1b55584dd1930746b5a468c";

export default function MovieList(props){

    const [movies, setMovies] = useState([]);
    
    async function getMovieData(){
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${props.title}&region=US&page=1`, {mode: "cors"});
        let movieData = await response.json();
        movieData = movieData.results;
        let movies = [];
        
        movies = movieData.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} image={movie.poster_path}/>)
  
        setMovies(movies);
    }

    useEffect(() => {
        getMovieData();
    },[props.title]);

    return(
        <div className="movie-list">
            {movies.length > 1 ? movies : ""}
        </div>
    )
}