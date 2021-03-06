import React, { useState } from 'react';
import './SignIn.css'

function SignIn({changeRoute, setUser}){

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  
  const onEmailChange = (event) => {
    setSignInEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value)
  }
  
  const onSubmitSignIn = () => {
    // Como es fetch POST, los parametros son URL y OBJ
    fetch('https://sleepy-wildwood-59471.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(data => data.json())
      .then(user => {
        if (user.id) {
          changeRoute('logged')
          setUser(user)
        } else {
          console.log('algo salio maaal')
        }
      })
      .catch(err => {console.log('errrrror')})
  }

  return (
    <div className='loggin'>
      <div className='logginBox'>
        <h2>Sign in</h2>
        <input 
          placeholder='E-mail'
          type='text'
          required
          autoFocus
          id='logginSignName'
          name='logginSignName'
          onChange={(event) => { onEmailChange(event) }}
        />
        <input 
          placeholder='Password'
          type='password'
          required
          id='logginSignPassword'
          name='logginSignPassword'
          onChange={(event) => { onPasswordChange(event) }}
        />
        <button onClick={onSubmitSignIn}>Sign in</button>
        <p className='logginRegister' onClick={()=> changeRoute('register') }>Register</p>
      </div>
    </div>
  )
}

export default SignIn;