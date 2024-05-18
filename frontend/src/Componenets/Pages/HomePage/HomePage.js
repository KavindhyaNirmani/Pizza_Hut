import React from 'react';
import Header from '../../Containers/Header/Header';
import './HomePage.css'; // Import your CSS file for styling
import OfferImg  from  "../../../Assets/offer2.jpg"
import Footer from '../../Containers/Footer/Footer'

const HomePage = () => {
  return (
    <div>
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
  <Footer/>
  </div>
  );
};

export default HomePage;
