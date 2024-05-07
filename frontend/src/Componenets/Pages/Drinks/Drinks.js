import React from 'react';
import Header from '../../Containers/Header/Header';
import './Drinks.css';
import List from '../../../Data/DrinkData';
import DrinkCard from '../../../Componenets/Containers/Card/Card';

const Drinks = () => {
  return (
    <div className="dhome-container">
    <Header size={0} />
    <div className='drinksbox'>
      {List.map((item) => (
        <DrinkCard item={item} />
      ))}
      
    </div>
  </div>
  )
}

export default Drinks
