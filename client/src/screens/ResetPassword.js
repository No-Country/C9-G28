import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import imagePass from "../assets/reset-pass.png";

import { resetPassword } from "../actions/userActions";

import Input from "../components/Input";

import { validateResetPassword } from "../utils/validationLogin";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorsPassword, setErrorsPassword] = useState({});

  const [input, setInput] = useState({
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrorsPassword(
      validateResetPassword({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Object.keys(errorsPassword).length < 1 &&
      input.password1 !== "" &&
      input.password2 !== ""
    ) {
      const result = dispatch(resetPassword(input.password1));
      setInput({
        password1: "",
        password2: "",
      });
      if (result) {
        alert("¡Contraseña actualizada exitosamente !");
        navigate("/");
      } else {
        alert("¡Error al actualizar la contraseña!");
      }
    } else {
      alert("¡Error al ingresar, Por favor revise los campos de Contraseña!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center  h-screen w-full ">
      <div className=" mb-4 sm:mr-42 md:m-16 ">
        <img src={imagePass} alt="logo login" className="h-64 md:h-auto" />
      </div>

      <div className="w-80 ml-6 items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="my-10 text-xl font-bold text-center">
            Elige una nueva contraseña
          </h1>
          <p className="w-80 my-4 text-justify">
            Para crear tu nueva contraseña ten en cuenta que debe tener mínimo 8
            caracteres, incluye minúsculas, mayúsculas, números y al menos un
            símbolo <strong> $ - @ - ! - % - * - ? - & </strong> y no ingreses
            espacios en blanco.
          </p>

          <Input
            type="password"
            name="password1"
            value={input.password1}
            func={handleChange}
            err={"false"}
            label="Nueva contraseña"
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
            err={"false"}
            label="Confirmar nueva contraseña"
          />

          {errorsPassword.password2 && (
            <p className="text-red-600 text-center">
              * {errorsPassword.password2}
            </p>
          )}

          <div className="flex items-center justify-center mt-5">
            <button
              className="bg-gray-700 text-white w-40 py-2
          border-2 rounded-lg hover:bg-violet-800 transition duration-500"
            >
              Comfirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
