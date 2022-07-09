import {Link } from "react-router-dom";

import "./css/movieCard.css";

function MovieCard({ movies }) {


    return (
        <>
            {movies.map((movie, index) => {

                return (
                    <div
                        className="main"
                        //style={{backgroundImage: `url(${movie.Poster})` }}
                    // 
                    >
                    

                        <Link to={{pathname:`/details?imdbID=${movie.imdbID}` }}>
                            <div className="link-container">
                            <div className="poster-content">
                                <div className="movie-title">{movie.Title}</div>
                                {/* <img
            class="rating"
            src="http://www.pngmart.com/files/7/Rating-Star-PNG-Transparent-Image.png"
          /> */}
                                <table className="table-more">
                                    <thead><tr>
                                        <th>Year</th>
                                        <th>Type</th>
                                    </tr>
                                    </thead>
                                    <tbody><tr>
                                        <td>{movie.Year}</td>
                                        <td>{movie.Type}</td>
                                    </tr></tbody>
                                </table>
                            </div>
                        </div>
                        </Link>
                    </div>
                );
            })}
        </>
    );
}

export default MovieCard;
