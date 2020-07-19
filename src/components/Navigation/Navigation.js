import React from 'react';
import brain from '../../assets/images/brain.svg';
import './Navigation.css';

const Navigation  = ({route, changeRoute}) => {
  return (
    <header>
      <div className="logoBox">
        <img src={brain} height='40px' alt='logo'/>
        <p>SmartBrain</p>
      </div>
      <nav>
        {
          route === 'logged' &&
<<<<<<< HEAD
          <p onClick={()=> changeRoute('signout')}>Sign out</p>
=======
          <p onClick={()=> changeRoute('signin')}>Sign out</p>
>>>>>>> 60cbe6d5f0bfbee07c2290101ac90e2734e7dae3
        }
        {
          route === 'signin' &&
          <p onClick={()=> changeRoute('register')}>Register</p>
        }
        {
          route === 'register' &&
          <p onClick={()=> changeRoute('signin')}>Sign in</p>
        }
        
      </nav>
    </header>
  );
};


export default Navigation;