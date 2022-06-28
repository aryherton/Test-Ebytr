import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LoginAndRegist from './pages/LoginAndRegist';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" elemet={<LoginAndRegist />} ></Route>
        <Route exact path="/" elemet={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
