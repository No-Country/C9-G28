import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { verifyCode } from "../actions/userActions";

const ValidateCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [code, setCode] = useState("");

  const handleChange = (e) => {
    if (code.length < 6) {
      setCode(e.target.value);
    }
  };

  const handlereset = () => {
    setCode("");
  };

  const onSubmitCode = (e) => {
    e.preventDefault();

    if (code.length === 0 || code.length < 6) {
      alert("¡Debe ingresar un código de seguridad valido!");
      return 0;
    }

    const userCode = parseInt(code);

    const result = dispatch(verifyCode(userCode));

    if (result) {
      navigate("/resetpassword");
    } else {
      alert("¡El código de seguridad ingresado es incorrecto!");
    }

    handlereset();
  };

  return (
    <div className="flex flex-col  items-center justify-center  h-screen w-full ">
      <div className="w-80 ml-6 items-center">
        <form onSubmit={onSubmitCode}>
          <h1 className="my-10 text-xl font-bold text-center">
            Verificar tu email
          </h1>
          <p>
            Enviamos el <strong>código</strong> a tu bandeja de entrada. Si no
            encuentras el correo,
            <strong> puedes verificar el correo de spam</strong>.
          </p>

          <div className="flex justify-center">
            <input
              type="number"
              className="mt-8 text-gray-600  outline-none mb-4 border-4 rounded-lg pl-2 w-36 font-bold text-3xl text-center"
              onChange={handleChange}
              value={code}
            ></input>
          </div>

          <div className="flex items-center justify-between mt-10">
            <span
              onClick={handlereset}
              className="bg-orange-400 text-white w-36 py-2 text-center cursor-pointer
              border-2 rounded-lg hover:bg-violet-800 transition duration-500"
            >
              Borrar código
            </span>

            <button
              className="bg-gray-700 text-white w-36 py-2
              border-2 rounded-lg hover:bg-violet-800 transition duration-500"
            >
              Verificar
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <Link to={"/"} className="mt-10 text-blue-700 ">
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};


export default ValidateCode;
