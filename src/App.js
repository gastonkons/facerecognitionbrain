import React from 'react';
import './App.css';
import particlesOption from './config/ParticlesJS'
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'



const initialState = {
  input: '',
  imageUrl: '',
  loading: false,
  boxes: [],
  route: 'signin',
  errFetch: false,
  user: {}
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data;
    const image = document.getElementById('inputImg');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  getArrayOfBoxs = (data) => {
    const address = data.outputs[0].data.regions;
    const array = [];
    for (let i = 0; i < address.length; i++) {
      let positions = address[i].region_info.bounding_box;
      array.push(this.calculateFaceLocation(positions))
    }
    return array;
  }

  displayFaceBox = (boxes) => {
    this.setState({
      boxes
    });
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  reviewErrFetch = (value) => {
    this.setState({
      errFetch: value
    })
  }

  isLoading = (status) => {
    this.setState({
      loading: status
    })
  }

  cleanBoundingBox = (boolean) => {
    const boundingBox = document.querySelectorAll('.bounding-box');
    if (boolean) {
      if (boundingBox.length > 0) {
        for (let i = 0; i < boundingBox.length; i++) {
          boundingBox[i].style.display = 'none';
        }
      }
    } else {
      if (boundingBox.length > 0) {
        for (let i = 0; i < boundingBox.length; i++) {
          boundingBox[i].style.display = 'block';
        }
      }
    }
  }

  setUser = (user) => {
    this.setState({
      user: user
    })
  }

  userEntriesUpdate = (user) => {
    // Como es fetch POST, los parametros son URL y OBJ
    fetch('https://sleepy-wildwood-59471.herokuapp.com/image', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: user.id
        })
      })
      .then(data => data.json())
      .then(data => {
        this.setState(Object.assign(this.state.user, {
          entries: data
        }))
      })
  }

  onSubmit = () => {
    this.cleanBoundingBox(true)
    this.isLoading(true)
    this.reviewErrFetch(false)
    this.setState({
      imageUrl: this.state.input
    });
    fetch('https://sleepy-wildwood-59471.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        this.isLoading(false)
        this.reviewErrFetch(false)
        this.cleanBoundingBox(false)
        return this.displayFaceBox(this.getArrayOfBoxs(response))
      })
      .catch(err => {
        this.cleanBoundingBox(true)
        this.reviewErrFetch(true)
        this.isLoading(false)
        console.log(err);
      })
    this.userEntriesUpdate(this.state.user)

    document.querySelector('.formInput').value = '';
  }

  changeRoute = (string) => {
    if (string === 'signout') {
      this.setState(initialState);
    } 
    else {
      this.setState({
        route: string
      })
    }
  }

  render() {
    const {
      route,
      imageUrl,
      errFetch,
      boxes,
      loading,
      user
    } = this.state;
    const {
      changeRoute,
      onInputChange,
      onSubmit,
      setUser
    } = this;
    return ( 
      <div className = "App" >
        <Particles className = 'particles'
          params = {
           particlesOption
          }
        />
        <Navigation route = {route} changeRoute = {changeRoute}/> 
        {
          (route === 'signin' || route === 'signout') &&
        <SignIn changeRoute = {changeRoute} setUser = {setUser} />
        }
        {
          route === 'register' &&
          <Register changeRoute = {changeRoute} setUser = {setUser} />
        }
        {
          route === 'logged' &&
          <>
          <Rank user = {user} />
          <ImageLinkForm onInputChange = {onInputChange} onSubmit = {onSubmit} />
          <FaceRecognition 
            inputUrl = {imageUrl} 
            errFetch = {errFetch} 
            boxes = {boxes}
            loading = {loading}
          /> 
          </>
        } 
      </div>
  );
}
}

export default App;
