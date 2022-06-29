import React, { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import LoginAndRegist from './pages/LoginAndRegist';
import { fetchRegister } from './services/fetch';

export default function App() {
  useEffect(() => {
    const fetchRegister = async (name, email, password) => {
      await fetch(URL, {
        method: 'Post',
        body: JSON.stringify(
            name,
            email,
            password,
        )
      })
      .then((data) => console.log(data))
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
    fetchRegister('Barbosa', 'barbosa@test.com', '1234567');
    }}, []);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" elemet={<LoginAndRegist />} />
    //     <Route exact path="/" elemet={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Home />
    </ div>
  );
}
