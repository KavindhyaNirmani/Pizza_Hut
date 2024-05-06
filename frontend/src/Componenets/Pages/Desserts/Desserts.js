import React from 'react'
import Header from '../../Containers/Header/Header';
import './Desserts.css';
import DessertCard from '../../../Componenets/Containers/Card/Card';
import List from '../../../Data/DessertData';


const Desserts = () => {
  return (
    <div className="dessert-container">
      <Header size={0} />
      <div className='desertsbox'>
      {List.map((item) => (
      <DessertCard item={item} />
    ))}

      </div>
    </div>
  )
}

export default Desserts
