import React from 'react';
<<<<<<< HEAD
import './ImageLinkForm.css';
=======
import './ImageLinkForm.css'
>>>>>>> 60cbe6d5f0bfbee07c2290101ac90e2734e7dae3

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className='imageLinkForm margin-lad'>
      <p>
        {`This Magic Brain will detect faces in your pictures. Git it a try!`}
      </p>
      <div className='formBox'>
        <input
          className='formInput'
          type='text'
          placeholder='Insert the link of your image'
          onChange={onInputChange}
         />
         <button className='formButton' onClick={onSubmit} >Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkForm;