import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
 

  return (
    <>
    
    <div className='App'>
    <Login/>
    </div>
    </>
  );
}

export default App
