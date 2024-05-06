import React from 'react';
import Header from '../../Containers/Header/Header';
import './Pizzas.css'; // Import your CSS file for styling
import Pizza1 from '../../../Assets/1p.jpg';
import Pizza2 from '../../../Assets/2p.jpg';
import Pizza3 from '../../../Assets/3p.jpg';
import Pizza4 from '../../../Assets/4p.jpg';
import Pizza5 from '../../../Assets/5p.jpg';

const Pizzas = () => {
  return (
    <div className="home-container">
      <Header size={0} />
      <div className='pizzasbox'>
        {/* 5 boxes in the first row */}
        <div className='box-item1'><img src={Pizza1} className='pizzaimg' alt=''/> </div>
        <div className='box-item2'><img src={Pizza2} className='pizzaimg' alt=''/></div>
        <div className='box-item3'><img src={Pizza3} className='pizzaimg' alt=''/></div>
        <div className='box-item4'><img src={Pizza4} className='pizzaimg' alt=''/></div>
        <div className='box-item5'><img src={Pizza5} className='pizzaimg' alt=''/></div>
        <div className='box-item6'><img src={Pizza1} className='pizzaimg' alt=''/></div>
        {/* 5 boxes in the second row */}
        <div className='box-item1'><img src={Pizza1} className='pizzaimg' alt=''/></div>
        <div className='box-item2'><img src={Pizza2} className='pizzaimg' alt=''/></div>
        <div className='box-item3'><img src={Pizza1} className='pizzaimg' alt=''/></div>
        <div className='box-item4'><img src={Pizza3} className='pizzaimg' alt=''/></div>
        <div className='box-item5'><img src={Pizza4} className='pizzaimg' alt=''/></div>
        <div className='box-item6'><img src={Pizza5} className='pizzaimg' alt=''/></div>
      </div>
    </div>
  );
}

export default Pizzas;
