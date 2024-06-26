import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../Assets/logo.png';
import cartlogo from '../../../Assets/cart.jpg';
import "./Header.css";

const Header = ({ size }) => {
    const navigate = useNavigate();

    const NavigateToHome = () => {
        navigate('/home');
    }
    const NavigateToPromotion = () => {
        navigate('/promotion');
    }
    const NavigateToAbout = () => {
        navigate('/about');
    }
    const NavigateToPizzas = () => {
        navigate('/pizza');
    }

    const NavigateToDrinks = () => {
        navigate('/drink');
    }

    const NavigateToDessert = () => {
        navigate('/dessert')
    }

    const NavigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className='header'>
            <div>
                <img src={logo} className='header-logo' alt="Logo" />  
            </div>
            <div className='header-buttons'>
                <button className='Home-button' onClick={NavigateToHome}>Home</button>
                <button className='Home-button' onClick={NavigateToPromotion}>Promotion</button>
                <button className='Home-button' onClick={NavigateToPizzas}>Pizzas</button>
                <button className='Home-button' onClick={NavigateToDrinks}>Drinks</button>
                <button className='Home-button' onClick={NavigateToDessert}>Desserts</button>
                <button className='Home-button' onClick={NavigateToAbout}>About</button>
                


                <button className='Login-button' onClick={NavigateToLogin}>Login</button>
                <div>
                    <img src={cartlogo} className='cart-image-header' alt="Cart" />
                </div>
                <div className='cart-number'>
                    <span>{size}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
