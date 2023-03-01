import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createUserForm } from '../actions/userActions';

import Input from '../components/Input';

import {
  validateEmail,
  validateResetPassword,
  validateText,
} from '../utils/validationLogin';

const FormRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorsEmail, setErrorsEmail] = useState({});
  const [errorsPassword, setErrorsPassword] = useState({});
  const [errorsText, setErrorsText] = useState({});

  const [input, setInput] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password1: '',
    password2: '',
  });
  const [imageUser, setImageUser] = useState();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'email') {
      setErrorsEmail(
        validateEmail({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }

    if (e.target.name === 'password1' || e.target.name === 'password2') {
      setErrorsPassword(
        validateResetPassword({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }

    if (
      e.target.name === 'nombre' ||
      e.target.name === 'apellido' ||
      e.target.name === 'telefono'
    ) {
      setErrorsText(
        validateText({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  };

  const handleUploadImage = (e) => {
    if (e.target.files) {
      setImageUser(e.target.files[0]);
      console.log('image>>>', imageUser);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Object.keys(errorsEmail).length < 1 &&
      Object.keys(errorsPassword).length < 1 &&
      Object.keys(errorsText).length < 1 &&
      input.email !== '' &&
      input.password1 !== '' &&
      input.password2 !== ''
    ) {
      const data = {
        username: input.email,
        password: input.password1,
        nombre: input.nombre,
        apellido: input.apellido,
        telefono: input.telefono,
        perfil: imageUser,
        activo: true,
        email: input.email,
      };
      const result = await dispatch(createUserForm(data));

      if (result) {
        alert('Cuenta creada con exito');
        navigate('/');
      } else {
        alert('Error no se pudo crear la cuenta');
      }
    } else {
      alert(
        '¡Error al ingresar los datos en los campos, por favor revise la información ingresada !'
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center  h-screen w-full bg-white ">
      <div className="w-80  items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="my-10 text-xl font-bold text-center">Registrarse</h1>
          <Input
            type="text"
            name="nombre"
            value={input.nombre}
            func={handleChange}
            err={{ nombre: errorsText.nombre }}
            label="Nombre"
          />
          <Input
            type="text"
            name="apellido"
            value={input.apellido}
            func={handleChange}
            err={{ apellido: errorsText.apellido }}
            label="Apellido"
          />

          <Input
            type="email"
            name="email"
            value={input.email}
            func={handleChange}
            err={{ email: errorsEmail.email }}
            label="Email"
          />
          <Input
            type="text"
            name="telefono"
            value={input.telefono}
            func={handleChange}
            err={{ telefono: errorsText.telefono }}
            label="Telefono"
          />

          <Input
            type="password"
            name="password1"
            value={input.password1}
            func={handleChange}
            err={'false'}
            label="Contraseña"
          />
          {errorsPassword.password1 && (
            <p className="text-red-600 text-center">
              * {errorsPassword.password1}
            </p>
          )}

          <Input
            type="password"
            name="password2"
            value={input.password2}
            func={handleChange}
            err={'false'}
            label="Confirmar la contraseña"
          />

          {errorsPassword.password2 && (
            <p className="text-red-600 text-center">
              * {errorsPassword.password2}
            </p>
          )}
          <label>Sube una imagen de perfil</label>
          <div
            className={
              imageUser
                ? 'bg-violet-800 text-white border-2 rounded-lg'
                : 'bg-gray-700 text-white border-2 rounded-lg'
            }
          >
            <input
              type="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleUploadImage(e)}
            />
          </div>

          <div className="flex items-center justify-center mt-5">
            <button
              className="bg-gray-700 text-white w-40 py-2
          border-2 rounded-lg hover:bg-violet-800 transition duration-500"
            >
              Registrarse
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <Link to={'/'} className="mt-2 text-blue-700 ">
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
