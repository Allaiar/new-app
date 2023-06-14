import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login"

const routes = () => {
  return <div>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/registration' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  </div>;
};

export default routes;
