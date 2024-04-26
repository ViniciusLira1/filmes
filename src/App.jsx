import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';

function App() {
 

  return (
    <>
    <h2>TESTE</h2>
    <div className='App'>
      <Navbar/>
      <h2>Movies Store</h2>
      <Outlet/>
    </div>
    </>
  );
}

export default App
