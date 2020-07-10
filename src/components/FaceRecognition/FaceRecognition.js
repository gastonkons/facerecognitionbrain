import React from 'react';
import Tilt from 'react-tilt';
import loadingImage from '../../assets/images/loading.svg'

import './FaceRecognition.css';


// This part has been updated with the recent Clarifai changes. Used to be:
// .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
// app.models.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)


const FaceRecognition = ({ inputUrl, boxes , loading, errFetch }) => {

  let key = 0;
  const listBoxes = 
    boxes.map(box => <div key={key++} className="bounding-box" style={{top:box.topRow, bottom:box.bottomRow, left:box.leftCol, right: box.rightCol}}></div>)

  return (
    <div >
      
         <Tilt className="Tilt tilt-img"  options={{ max : 5 }} style={{ width: '85%' }} >
          <div className="Tilt-inner"> 
            <div className="imgBox ">
              {
                loading && 
                <div className='loadingBox'>
                  <img className='loadingSvg' width='100px' src={loadingImage} alt='loading' />
                </div>
              }
              {
                errFetch ? (<h2 className='textError'>The URL is wrong.. Try again!</h2>) :
                  
                (
                  <div>
                  <img id="inputImg" className='img' src={inputUrl} alt=''/>
                  
                  {listBoxes}
                  
                  </div>
                )
              }
            </div>
          </div>
        </Tilt>
       
      
    </div>
  )
}

export default FaceRecognition;