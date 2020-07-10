const particlesOption = {
  particles: {
    number:{ 
      value: 30,
      density: {
        enable: true,
        value_area:600
      }
    }    
  },
  interactivity:{
    detect_on:'canvas',
    events:{
      onhover:{
        enable:true,
        mode:'repulse'
      }
    }}
};

export default particlesOption;