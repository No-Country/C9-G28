import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import imageLogin from '../assets/logo-login.png';

import { login } from '../actions/userActions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex flex-col items-center justify-center  h-screen w-full' >
      
     
      
      
      <form className='w-80'>
        <div className='flex flex-col items-center justify-center mb-4 '>
          <img src={imageLogin} alt='logo login' className='h-64'/>
          <h1 className='mt-10 text-xl font-bold'>Iniciar Sesión</h1>
        </div>
        <label className='text-black'>Email</label>
        <input type="email" name="" id="" className='w-full py-2 text-gray-600 px-1 
          outline-none mb-4 border-2 rounded-lg'/>

        <label className='text-black'>Contraseña</label>
        <input type="password" name="" id="" className='w-full py-2 text-gray-600 px-1 
          outline-none mb-4 border-2 rounded-lg'/>

        <input type="checkbox" name="" id="remember" className='mb-4 mr-2'/>
        <label htmlFor='remember' className='text-black'>Recuérdame</label>
        <Link to={'/'} className='mb-4 ml-4 text-blue-700'>¿Olvidaste tu contraseña?</Link>

        <div className='flex items-center justify-center mt-10'>
          <button className='bg-gray-700 text-white w-40 py-2
          border-2 rounded-lg hover:bg-violet-800 transition duration-500'>
            Ingresar</button>
        </div>
        


      </form>

      
      <Link to={'/'} className='mt-10 text-blue-700'>Registrarme</Link>
      
      

    </div>
  )
};

export default LoginScreen;
