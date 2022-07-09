
import MovieCard from "./MovieCards";
import { useEffect, useState } from "react";

import "./css/home.css";

function Home() {
    let [movies, setMovies] = useState([]);


    let movieName = "";

    function searchClick(){
        setMovies([]);
        movieName =  document.getElementById("search-field").value.replaceAll(' ', '+');
        ;
        getMovieRequest() ;

        document.getElementById("search-field").value = "";
    }

    async function getMovieRequest(){
        const response = await fetch("https://www.omdbapi.com/?s="+movieName+"&apikey=527e1786");
        const responseJSON = await response.json();
        if(responseJSON.Search)
            setMovies(responseJSON.Search);
    };

    useEffect(()=>{
        // getMovieRequest();
    } , []);

    // console.log(movies);

    return (
        <>
            <div id="home">
                <span>
                    <input
                        id="search-field"
                        type="text"
                        placeholder="Search Movie"
                    ></input>
                    <button className="search-button" onClick={()=>{searchClick()}}>
                        {/* <Link to="/details">Search</Link> */}
                        Search
                    </button>
                </span>
                <div className="movie-list">
                    <MovieCard movies={movies} />
                </div>
            </div>
        </>
    );
}

export default Home;

// API call for search
// https://www.omdbapi.com/?s=zindagi&apikey=527e1786
