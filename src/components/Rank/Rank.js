import React from 'react';
import './Rank.css'
 

const Rank = () => {
  const user = 'Gastón';
  const value = 5;
  return (
    <div className='textBox'>
      <div className='userText'>
        <p>
          <span>{user}</span>, your current rank is .. <span>#{value}!</span>
        </p>
      </div>
    </div>
  );
}


export default Rank;