import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../assets/avatar.jpg';

const Footer = () => {
  return (
    <footer className="bg-main-bg mt-10 py-5 px-5">
      <div className="flex flex-row justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer px-1 hover:bg-light-gray rounded-lg"
          onClick={() => {}}
        >
          <img className="rounded-full w-[50px]" src={avatar} alt="avatar" />
        </div>

        <div className="flex flex-col items-center">
          <Link className="text-white font-bold pb-2" to="#">
            Home
          </Link>

          <Link className="text-white" to="#">
            Mis turnos
          </Link>
        </div>

        <div className="flex flex-col items-center">
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

        <div className="flex flex-col items-center">
          <Link className="text-white font-bold pb-2" to="#">
            Mi perfil
          </Link>

          <Link className="text-white" to="#">
            Ajustes
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
