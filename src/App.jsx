import React from 'react';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
     
    </div>
  );
};

export default App;