

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './component/Checkout';
import Header from './component/Header';
import Home from './component/Home';
import Singlefood from './component/Singlefood';
import Login from './component/user authentication/Login';
import Registration from './component/user authentication/Registration';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path="/singlefood" element={<Singlefood></Singlefood>}></Route>

      </Routes>
      {/* <Home></Home> */}
    </>
  );
};

export default App;
