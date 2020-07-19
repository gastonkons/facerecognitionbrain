import React from 'react';
import './Rank.css'
 

<<<<<<< HEAD
function Rank({user}) {
  const name = user.name;
  const entries = user.entries;
=======
const Rank = () => {
  const user = 'Gastón';
  const value = 5;
>>>>>>> 60cbe6d5f0bfbee07c2290101ac90e2734e7dae3
  return (
    <div className='textBox'>
      <div className='userText'>
        <p>
<<<<<<< HEAD
          <span>{name}</span>, your current rank is .. <span>#{entries}!</span>
=======
          <span>{user}</span>, your current rank is .. <span>#{value}!</span>
>>>>>>> 60cbe6d5f0bfbee07c2290101ac90e2734e7dae3
        </p>
      </div>
    </div>
  );
}


export default Rank;