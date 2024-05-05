import React from 'react';
import Header from '../../Containers/Header/Header';
import './Pizzas.css'; // Import your CSS file for styling
import Pizza1 from '../../../Assets/1p.jpg';

const Pizzas = () => {
  return (
    <div className="home-container">
      <Header size={0} />
      <div className='box'>
        {/* 5 boxes in the first row */}
        <div className='box-item1'><img src={Pizza1} className='pizzaimg' alt=''/> </div>
        <div className='box-item2'>Box 2</div>
        <div className='box-item3'>Box 3</div>
        <div className='box-item4'>Box 4</div>
        <div className='box-item5'>Box 5</div>
        <div className='box-item6'>Box 6</div>
        {/* 5 boxes in the second row */}
        <div className='box-item1'>Box 6</div>
        <div className='box-item2'>Box 7</div>
        <div className='box-item3'>Box 8</div>
        <div className='box-item4'>Box 9</div>
        <div className='box-item5'>Box 10</div>
        <div className='box-item6'>Box 12</div>
      </div>
    </div>
  );
}

export default Pizzas;
