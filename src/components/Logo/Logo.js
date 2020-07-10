import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from '../../assets/images/brain.svg'
 

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt logo-box"  options={{ max : 20 }} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner" title='Smart Brain'> 
          <img src={brain}  alt='logo brain' />
        </div>
      </Tilt>
    </div>
  );
}


export default Logo;