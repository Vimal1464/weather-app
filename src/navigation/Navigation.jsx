import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { weatherHome } from '../contents/Routes';
import Home from '../screens/Home';

const Navigation = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path={weatherHome.home} element={<Home/>} />
        </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default Navigation
