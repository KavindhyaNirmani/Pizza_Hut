import React from 'react';
import Header from '../../Containers/Header/Header';
import './Drinks.css';
import Drink1 from '../../../Assets/1dd.jpg';
import Drink2 from '../../../Assets/2dd.jpg';
import Drink3 from '../../../Assets/3dd.jpg';
import Drink4 from '../../../Assets/4dd.jpg';
import Drink5 from '../../../Assets/5dd.jpg';
import Drink6 from '../../../Assets/6dd.jpg';
import Drink7 from '../../../Assets/7dd.jpg';
import Drink8 from '../../../Assets/8dd.jpg';
import Drink9 from '../../../Assets/9dd.jpg';
import Drink10 from '../../../Assets/10dd.jpg';

const Drinks = () => {
  return (
    <div className="dhome-container">
    <Header size={0} />
    <div className='drinksbox'>
      {/* 5 boxes in the first row */}
      <div className='box-item1'><img src={Drink1} className='drinkimg' alt=''/> </div>
      <div className='box-item2'><img src={Drink2} className='drinkimg' alt=''/></div>
      <div className='box-item3'><img src={Drink3} className='drinkimg' alt=''/></div>
      <div className='box-item4'><img src={Drink4} className='drinkimg' alt=''/></div>
      <div className='box-item5'><img src={Drink5} className='drinkimg' alt=''/></div>
      <div className='box-item6'><img src={Drink6} className='drinkimg' alt=''/></div>
      {/* 5 boxes in the second row */}
      <div className='box-item1'><img src={Drink7} className='drinkimg' alt=''/></div>
      <div className='box-item2'><img src={Drink8} className='drinkimg' alt=''/></div>
      <div className='box-item3'><img src={Drink9} className='drinkimg' alt=''/></div>
      <div className='box-item4'><img src={Drink1} className='drinkimg' alt=''/></div>
      <div className='box-item5'><img src={Drink10} className='drinkimg' alt=''/></div>
      <div className='box-item6'><img src={Drink3} className='drinkimg' alt=''/></div>
    </div>
  </div>
  )
}

export default Drinks
