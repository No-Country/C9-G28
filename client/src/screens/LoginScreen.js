import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import imageLogin from '../assets/logo-login.png';

import { login } from '../actions/userActions';

import Input from '../components/Input';

import {validateEmail, validatePassword} from '../utils/validationLogin';

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [errorsEmail, setErrorsEmail] = useState({});
  const [errorsPassword, setErrorsPassword] = useState({});

  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);


  const handleChange = (e) => {
    
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    if(e.target.name === 'email'){
      setErrorsEmail(validateEmail({
        ...input,
        [e.target.name]: e.target.value,
      }));
    }

    if(e.target.name === 'password'){
      setErrorsPassword(validatePassword({
        ...input,
        [e.target.name]: e.target.value,
      }));
    }

    
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
   
    
    if(Object.keys(errorsEmail).length < 1 && Object.keys(errorsPassword).length  < 1 && input.email !== '' && input.password !== ''){
      dispatch(login(input.email, input.password));
    }else{
      alert('¡Error al ingresar, Por favor revise los campos de Email y Contraseña!')
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center  h-screen w-full">
      <div className="flex flex-col items-center justify-center mb-4 ">
        <img src={imageLogin} alt="logo login" className="h-64" />
        <h1 className="mt-10 text-xl font-bold">Iniciar Sesión</h1>
      </div>

      <form className="w-80" onSubmit={submitHandler}>
        <Input
          type="email"
          name="email"
          value={input.email}
          func={handleChange}
          err={{email: errorsEmail.email}}
        />
        
        
        <Input
          type="password"
          name="password"
          value={input.password}
          func={handleChange}
          err={{password: errorsPassword.password}}
        />
        

        <input type="checkbox" name="" id="remember" className="mb-4 mr-2" />
        <label htmlFor="remember" className="text-black">
          Recuérdame
        </label>
        <Link to={'/'} className="mb-4 ml-4 text-blue-700">
          ¿Olvidaste tu contraseña?
        </Link>

        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-gray-700 text-white w-40 py-2
          border-2 rounded-lg hover:bg-violet-800 transition duration-500"
          >
            Ingresar
          </button>
        </div>
      </form>

      <Link to={'/registrar'} className="mt-10 text-blue-700">
        Registrarme
      </Link>
    </div>
  );
};

export default LoginScreen;
