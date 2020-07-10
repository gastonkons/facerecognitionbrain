import React from 'react';
import './SignIn.css'

function SignIn({changeRoute}){

  return (
    <div className='loggin'>
      <div className='logginBox'>
        <h2>Sign in</h2>
        <input 
          placeholder='Username'
          type='text'
          required
          autoFocus
          id='logginSignUsername'
          name='logginSignUsername'
        />
        <input 
          placeholder='Password'
          type='password'
          required
          id='logginSignPassword'
          name='logginSignPassword'
        />
        <button onClick={() => changeRoute('logged')}>Sign in</button>
        <p className='logginRegister' onClick={()=> changeRoute('register')}>Register</p>
      </div>
    </div>
  )
}

export default SignIn;