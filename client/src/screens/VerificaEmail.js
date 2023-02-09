import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import imageEmail from '../assets/verifica-email.png';

import { login } from '../actions/userActions';

import Input from '../components/Input';

import { validateEmail } from '../utils/validationLogin';

const VerificarEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorsEmail, setErrorsEmail] = useState({});
  const [input, setInput] = useState('');

  const handleChange = (e) => {

    let email = e.target.value;
    setInput(email);

    setErrorsEmail(
      validateEmail({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      Object.keys(errorsEmail).length < 1 &&
      input.email !== ''
    ) {
      dispatch(login(input.email, input.password));
    } else {
      alert(
        '¡Error al enviar, Por favor revise el campo de Email!'
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center  h-screen w-full">
      <div className="mb-4 sm:mr-42 md:w-1/2  ">
        <img src={imageEmail} alt="logo" className="h-64 md:h-auto" />
        
      </div>

      <div className="w-80 ml-6 items-center">
        <h1 className="mt-10 text-3xl font-bold">Recuperar Contraseña</h1>
        <p className='w-80 my-4 text-justify'>
          No te preocupes, te ayudamos! Ingresa tu correo electrónico con el que
          te registraste en la aplicación y te enviaremos un <strong>código de
          verificación para restablecer tu contraseña</strong>.
        </p>
        <form  onSubmit={submitHandler}>
          <Input
            type="email"
            name="email"
            value={input}
            func={handleChange}
            err={{ email: errorsEmail.email }}
          />

          <div className="flex items-center justify-center mt-50">
            <button
              className="bg-gray-700 text-white w-40 py-2
            border-2 rounded-lg hover:bg-violet-800 transition duration-500"
            >
              Enviar Código 
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center'>
          <Link to={'/'} className="mt-6 text-blue-700 ">
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificarEmail;
