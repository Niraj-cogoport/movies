import React from "react";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import './css/details.css'

function Details() {
  const queryParams = new URLSearchParams(window.location.search);
  
  const imdbID = queryParams.get("imdbID");

  let [movieDetail, setMovieDetail] = useState([]);
  const[done, setDone] = useState(undefined);

  async function getMovieDetails() {
    const response = await fetch(
      "https://www.omdbapi.com/?i=" + imdbID + "&apikey=527e1786"
    );
    const responseJSON = await response.json();
    if (responseJSON) setMovieDetail(responseJSON);
  }

  useEffect(() => {
    fetch("https://www.omdbapi.com/?i=" + imdbID + "&apikey=527e1786")
  .then(response => response.json())
  .then(json => {
    setMovieDetail(json);
    setDone(true); 
  })
  }, []);

  console.log(movieDetail);

  return (
    !done ? <center><ReactLoading type= {"balls"} color= {"#F15412"}  height={"10%"} width={"10%"} className="center"/></center> :
    <>
      <h1>{movieDetail.Title}</h1>
      <span>
      <h3>{movieDetail.Year} |</h3>
      <h3> {movieDetail.Runtime} |</h3>
      <h3> {movieDetail.Rated}</h3>
      </span>
      <h3>{movieDetail.Plot}</h3>
      <h3>Genre : {movieDetail.Genre}</h3>
      <h3>Created By : {movieDetail.Director}</h3>
      <h3>Starring : {movieDetail.Actors}</h3>
      <h3>Country : {movieDetail.Country}</h3>

    </>
  );
}

export default Details;
