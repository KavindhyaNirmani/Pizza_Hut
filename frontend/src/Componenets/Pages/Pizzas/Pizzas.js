import React from 'react';
import Header from '../../Containers/Header/Header';
import './Pizzas.css'; // Import your CSS file for styling
import List from '../../../Data/PizzaData';
import PizzaCard from '../../../Componenets/Containers/Card/Card';

const Pizzas = () => {
  return (
    <div className="home-container">
      <Header size={0} />
      <div className='pizzasbox'>
      {List.map((item) => (
      <PizzaCard item={item} />
    ))}
      </div>
    </div>
  );
}

export default Pizzas;
