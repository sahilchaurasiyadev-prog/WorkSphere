import React from "react";
import loginBg from "./assets/login-bg.png";
import logo from "./assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${loginBg})` }}
      className='h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center'
    >
      <div className='flex flex-col items-center gap-6 px-4'>
        <img
          src={logo}
          alt='logo image'
          className='h-auto w-32 object-contain'
        />

        <div className='min-w-fit bg-white p-10 rounded-2xl inset-shadow-2xs'>
          <h1 className='text-center font-semibold text-2xl w-full'>Sign In</h1>
          <p className='text-center text-lg text-gray-500 mb-5'>Please enter below details to access the dashboard</p>

          <div className='w-full max-w-sm'>
            <label htmlFor='email' className="font-[500] mb-3">Email Address</label>

            <div className="relative flex items-center">
              <div className="absolute">
                <MdOutlineMailOutline />
              </div>
              <input type='email' placeholder='Enter your email' name='email' className='border-2' />
            </div>
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

          <div className="flex justify-center">
            <button className="flex">
              <BsFacebook size={25} color="blue" />
              <span>Facebook</span>
            </button>

            <button className="flex">
              <FcGoogle size={25} />
              <span>Google</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;