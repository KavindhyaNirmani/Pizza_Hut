import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Componenets/Pages/AboutPage/AboutPage';
import Home from './Componenets/Pages/HomePage/HomePage';
import Menu from './Componenets/Pages/MenuPage/MenuPage';
import Pizzas from './Componenets/Pages/Pizzas/Pizzas';
import Desserts from './Componenets/Pages/Desserts/Desserts';
import Drinks from './Componenets/Pages/Drinks/Drinks';
import Header from './Componenets/Containers/Header/Header';

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element = {<Home/>} />
      <Route path='/home'  element = {<Home/>} />
      <Route path='/header' element = {<Header/>} />
      <Route path='/about'  element = {<About/>} />
      <Route path='/menu'  element = {<Menu/>} />
      <Route path='/pizza'  element = {<Pizzas/>} />
      <Route path='/dessert'  element = {<Desserts/>} />
      <Route path='/drink'  element = {<Drinks/>} />
    </Routes>
    </BrowserRouter>
  )
}