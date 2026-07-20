import React, { useState } from "react";
import loginBg from "./assets/login-bg.png";
import logo from "./assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaUnlock } from "react-icons/fa";

const Login = () => {
  const [hide, setHide] = useState(true);

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
          <p className='text-center text-lg text-gray-500 mb-5'>
            Please enter below details to access the dashboard
          </p>

          {/* Email input */}

          <label for='email' className='block mb-2 font-[500]'>
            Email Address
          </label>

          <div className='mb-5'>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <MdOutlineMailOutline style={20} />
              </div>
              <input
                id='email'
                type='email'
                placeholder='Enter your email'
                className='block w-full ps-9 pe-5 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body '
              />
            </div>
          </div>

          {/* Password input */}

          <label for='password' className='block mb-2 font-[500]'>
            Password
          </label>

          <div className='mb-5'>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <TbLockPassword />
              </div>
              <input
                id='password'
                type={hide ? "password" : "text"}
                placeholder='************'
                className='block w-full ps-9 pe-5 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body'
              />
              <button
                onClick={() => setHide(!hide)}
                className='absolute inset-y-0 end-0 flex items-center ps-3 '
              >
                {hide ? <TbLockPassword /> : <FaUnlock />}
              </button>
            </div>
          </div>

          <div className='flex justify-between'>
            <div>
              <input type='checkbox' name='remember me' />
              <label htmlFor='remember me'>Remember Me</label>
            </div>
            <div>
              <a href='#'>Forget Password?</a>
            </div>
          </div>

          <div>
            <button type='submit' href='#'>
              Login
            </button>
          </div>

          <div className='flex justify-center'>
            <button className='flex'>
              <BsFacebook size={25} color='blue' />
              <span>Facebook</span>
            </button>

            <button className='flex'>
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
