import React from 'react';
import Header from '../../Containers/Header/Header';
import './HomePage.css'; // Import your CSS file for styling
import OfferImg  from  "../../../Assets/offer2.jpg"

const HomePage = () => {
  return (
    <div className="home-container">
      <Header size={0} /> {/* Example usage of the Header component */}
      {/* Other content of the Home component */}
      <div className='box'>
        <div className='box_1'><img src={OfferImg} className='offerimg' alt='' /> </div>
        <div className='box_2'> <img src={OfferImg} className='offerimg' alt='' /> </div>
        <div className='box_3'> <img src={OfferImg} className='offerimg' alt='' /> </div>
        <div className='box_4'> <img src={OfferImg} className='offerimg' alt='' /> </div>
      </div>
    </div>
  );
};

export default HomePage;
