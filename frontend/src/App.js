import React, { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import LoginAndRegist from './pages/LoginAndRegist';
import Api from './services/api';
import Url from './help/URL'

export default function App() {
  useEffect(() => {
    Api
      .post(Url.ENDPOINT_LOGIN_AND_REGIST, { name: 'Santos', email: 'santos@test.com', password: '1234567'})
      .then((data) => console.log(data, 'resultado do axios'));
  }, []);

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
