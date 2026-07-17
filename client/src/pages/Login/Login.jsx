import React from 'react'
import loginBg from './assets/login-bg.png'

const Login = () => {
  return (
    <div
      className='min-h-screen w-full bg-cover bg-center'
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div
      className='flex items-center justify-center bg-white'
      >Login form</div>
    </div>
  )
}

export default Login;