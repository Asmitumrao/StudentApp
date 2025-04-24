import './App.css'
// import React from 'react'
import Login from './component/Login'
import Register from './component/Registeration'
import Dashboard from './component/Dashboard'
import { Route,Routes } from 'react-router-dom';
import HomePage from './component/homePage';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>

    </>
  )
}

export default App
