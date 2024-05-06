import React from 'react'
import Header from '../../Containers/Header/Header';
import './Desserts.css';


const Desserts = () => {
  return (
    <div className="dessert-container">
      <Header size={0} />
      <div className='desertsbox'>
        <div className='box-item1'></div>
        <div className='box-item2'></div>
        <div className='box-item3'></div>
        <div className='box-item4'></div>
      </div>
    </div>
  )
}

export default Desserts
