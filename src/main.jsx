import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<App/>}>
          <Route path="/" element={<Login/>}/>
    
        
          
    </Route>
    <Route path="perfil" element={<Profile/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="movie/:id" element={<Movie/>}/>
    <Route path="search" element={<Search/>}/>
        
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
