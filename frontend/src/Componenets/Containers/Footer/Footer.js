import React from 'react';
import './Footer.css';
import fb from '../../../Assets/f1.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb__footer secton padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links-div'>
            <h4>For Business</h4>

            <a href='/employee'>
              <p>Employee</p>
            </a>

            <a href='/healthplan'>
              <p>Health Plan</p>
            </a>

            <a href='/individual'>
              <p>Individual</p>
            </a>
          </div>

          <div className='sb__footer-links-div'>
            <h4>For Business</h4>

            <a href='/employee'>
              <p>Employee</p>
            </a>

            <a href='/healthplan'>
              <p>Health Plan</p>
            </a>

            <a href='/individual'>
              <p>Individual</p>
            </a>
          </div>
        
          <div className='sb__footer-links-div'>
            <h4>For Business</h4>

            <a href='/employee'>
              <p>Employee</p>
            </a>

            <a href='/healthplan'>
              <p>Health Plan</p>
            </a>

            <a href='/individual'>
              <p>Individual</p>
            </a>
          </div>

          <div className='sb__footer-links-div'>
            <h4>For Business</h4>

            <a href='/employee'>
              <p>Employee</p>
            </a>

            <a href='/healthplan'>
              <p>Health Plan</p>
            </a>

            <a href='/individual'>
              <p>Individual</p>
            </a>
          </div>

          <div className='sb__footer-links-div'>
            <h4> Coming soon on </h4>
            <div className='socialmedia'>
              <p><img src={fb} alt=''/> </p>
              <p><img src={fb} alt=''/> </p>
              <p><img src={fb} alt=''/> </p>
              <p><img src={fb} alt=''/> </p>

            </div>
          </div>
        </div>

        <hr></hr>

        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>

            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
