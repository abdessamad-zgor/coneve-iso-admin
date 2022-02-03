import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.scss';
import Home from './views/Home';
import Products from './views/Products';
import Orders from './views/Orders';
import Layout from './views/Layout';
import dotenv from 'dotenv';

dotenv.config();

function Main() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Main;
