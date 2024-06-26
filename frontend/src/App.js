import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Componenets/Pages/AboutPage/AboutPage';
import Home from './Componenets/Pages/HomePage/HomePage';
import Promotion from './Componenets/Pages/MenuPage/MenuPage';
import Pizzas from './Componenets/Pages/Pizzas/Pizzas';
import Desserts from './Componenets/Pages/Desserts/Desserts';
import Drinks from './Componenets/Pages/Drinks/Drinks';
import Header from './Componenets/Containers/Header/Header';
import Footer from './Componenets/Containers/Footer/Footer';

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element = {<Home/>} />
      <Route path='/home'  element = {<Home/>} />
      <Route path='/header' element = {<Header/>} />
      <Route path='/footer'  element = {<Footer/>} />
      <Route path='/about'  element = {<About/>} />
      <Route path='/promotion'  element = {<Promotion/>} />
      <Route path='/pizza'  element = {<Pizzas/>} />
      <Route path='/dessert'  element = {<Desserts/>} />
      <Route path='/drink'  element = {<Drinks/>} />
    </Routes>
    </BrowserRouter>
  )
}