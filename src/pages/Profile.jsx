
import React, { useState } from 'react';
import './Profile.css';
import perfilLira from '../assets/perfilLira.jpeg';
import Navbar from '../components/Navbar';
const Profile = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');

  const handleAddMovie = () => {
    if (movieName) {
      setMovies([...movies, movieName]);
      setMovieName('');
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="profile-container">
      <div className="profile-box">
        <img src={perfilLira} alt="Profile" className="profile-pic" />
        <h1>Vinicius Lira</h1>
        <p>Sou uma pessoa que é um grande apreciador de filmes, adoro principalmente filmes de comedia,ação e suspense.</p>
        <h2>Adicione uma lista de filmes favoritos</h2>
        <div className="add-movie">
          <input 
            type="text" 
            value={movieName} 
            onChange={(e) => setMovieName(e.target.value)} 
            placeholder="Adicionar um filme" 
          />
          <button onClick={handleAddMovie}>Adicionar</button>
        </div>
        <ul className="movie-list">
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Profile;
