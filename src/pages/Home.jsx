import React from "react";
import { useState,useEffect } from "react";
import MovieCard from "../components/MovieCard";
import './MoviesGrid.css';
import Navbar from "../components/Navbar";

const moviesURL=import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () =>{
  const [topMovies,setTopMovies] = useState([])
  
  const getTopRatedMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results);

  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);

  }, [])
       
    return  (
      <>
     <Navbar></Navbar>
    
    <div className="container">
        <h2 className="title">Best Movies</h2>
        <div className="movies-container">
         {topMovies.lenght === 0 && <p>Loading...</p>}   

        {topMovies.length > 0 && topMovies && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>
        )}

        </div>
       
    </div>
    
    </>
    );
};

export default Home