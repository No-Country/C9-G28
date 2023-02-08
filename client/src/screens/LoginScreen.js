import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import imageLogin from '../assets/logo-login.png';

import { login } from '../actions/userActions';

import Input from '../components/Input';

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
          name="Email"
          value={email}
          func={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          name="Contraseña"
          value={password}
          func={(e) => setPassword(e.target.value)}
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
