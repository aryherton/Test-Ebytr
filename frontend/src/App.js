import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LoginAndRegist from './pages/LoginAndRegist';
import { getArrMessages } from './services/api';
import Url from './help/URL'

export default function App() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbGV1QHRlc3QuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3IiwiaWF0IjoxNjU2NTE0ODQ4LCJleHAiOjE2NTkxOTMyNDh9.UKlXRamQHm6eh3wgvPqw5ezdTyuvhb7XeRVy_UI-0Gk';
  const [ arrMess, setArrMess ] = useState('');
  const data = useCallback( async () => {
    const { arrMessage } = await getArrMessages(
      Url.ENDPOINT_MESSAGE,
      token,
    );
    setArrMess(arrMessage);
  }, []);
  useEffect(() => {
    data();
  }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" elemet={<LoginAndRegist />} />
        <Route exact path="/" elemet={<Home />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   { console.log(arrMess, 'Dentro do useEffect <<<<<<<<<<<<') }
    //   <Home />
    // </ div>
  );
}
