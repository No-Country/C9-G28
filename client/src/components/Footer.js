import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-main-bg mt-10 pt-5 pb-10 md:pb-5 px-5">
      <div className="flex flex-col items-center justify-between md:flex-row md:mx-[350px]">
        <h1 className="text-white font-extrabold text-3xl p-1 mb-2 md:mb-0">
          <Link to="/">MediCare</Link>
        </h1>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center md:mx-10 mr-6">
            <Link className="text-white font-bold pb-2" to="#">
              Home
            </Link>

            <Link className="text-white" to="#">
              Mis turnos
            </Link>
          </div>

          <div className="flex flex-col items-center md:mx-10 mx-6">
            <Link className="text-white font-bold pb-2" to="#">
              Agendar
            </Link>

            <Link className="text-white" to="#">
              Especialistas
            </Link>

            <Link className="text-white" to="#">
              Entidades
            </Link>
          </div>

          <div className="flex flex-col items-center md:ml-10 ml-3">
            <Link className="text-white font-bold pb-2" to="#">
              Mi perfil
            </Link>

            <Link className="text-white" to="#">
              Ajustes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
