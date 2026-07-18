import React from "react";
import loginBg from "./assets/login-bg.png";
import logo from "./assets/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${loginBg})` }}
      className='h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center'
    >
      <div className='flex flex-col items-center gap-6 w-full max-w-md px-4'>
        <img
          src={logo}
          alt='logo image'
          className='h-auto w-32 object-contain'
        />

        <div className='h-100 w-100 bg-white'>
          <h1 className='text-center'>Sign In</h1>
          <p>Please enter below details to access the dashboard</p>

          <div className='flex flex-col'>
            <label htmlFor='email'>Email Address</label>
            <input type='email' name='email' className='border-2' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' className='border-2' />
          </div>

          <div className='flex justify-between'>
            <div>
              <input type='checkbox' name='remember me' />
              <label htmlFor='remember me'>Remember Me</label>
            </div>
            <div>
              <a href="#">Forget Password?</a>
            </div>
          </div>

          <div>
            <button type="submit" href="#">Login</button>
          </div>
          <FcGoogle />

        </div>
      </div>
    </div>
  );
};

export default Login;