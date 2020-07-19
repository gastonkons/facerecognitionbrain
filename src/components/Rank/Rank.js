import React from 'react';
import './Rank.css'
 

function Rank({user}) {
  const name = user.name;
  const entries = user.entries;
  return (
    <div className='textBox'>
      <div className='userText'>
        <p>
          <span>{name}</span>, your current rank is .. <span>#{entries}!</span>
        </p>
      </div>
    </div>
  );
}


export default Rank;