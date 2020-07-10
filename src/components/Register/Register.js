import React from 'react';

function Register({changeRoute}){

  return (
    <div className='loggin'>
      <div className='logginBox'>
        <h2>Register</h2>
        <input 
          placeholder='Name'
          type='text'
          required
          autoFocus
          id='logginRegisterName'
          name='logginRegisterName'
        />
        <input 
          placeholder='Username'
          type='text'
          required
          autoFocus
          id='logginRegisterUsername'
          name='logginRegisterUsername'
        />
        <input 
          placeholder='E-mail'
          type='email'
          required
          autoFocus
          id='logginRegisterEmail'
          name='logginRegisterEmail'
        />
        <input 
          placeholder='Password'
          type='password'
          required
          id='logginRegisterPassword'
          name='logginRegisterPassword'
        />
        <input 
          placeholder='Password again'
          type='password'
          required
          id='logginRegisterPasswordAgain'
          name='logginRegisterPasswordAgain'
        />
        <button onClick={() => changeRoute('logged')}>Register</button>
        <p className='logginRegister' onClick={()=> changeRoute('signin')}>Sign in</p>
      </div>
    </div>
  )
}

export default Register;