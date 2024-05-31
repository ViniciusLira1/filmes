import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2, BiUser } from "react-icons/bi";
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <div className="nav-left">
        <h2>
          <Link to="/"><BiCameraMovie />Movies Store</Link>
        </h2>
      </div>
      <div className="nav-center">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Search a movie" 
            onChange={(e) => setSearch(e.target.value)} 
            value={search} 
          />
          <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </div>
      <div className="nav-right">
        <button className="botao-nav" onClick={() => navigate("/")}>Login</button>
        <button className="botao-nav" onClick={() => navigate("/perfil")}><BiUser /></button>
      </div>
    </nav>
  );
}

export default Navbar;


