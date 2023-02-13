import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import avatar from '../assets/avatar.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ScheduleScreen = ({ image, name, hospital, place, specialist }) => {
  return (
    <div>
      <Header />

      <p className="text-[40px] font-bold mx-10 my-10 text-blueDeep">
        Solicitud de turno
      </p>

      <div className="flex flex-row m-3">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-[200px] mx-auto"
        />

        <div>
          <div className="flex flex-col">
            <h5 className="font-bold text-[35px] mb-3">Mariana Cano</h5>

            <div className="bg-green-100 text-green-800 rounded-3xl w-[120px] text-center mb-7">
              <p>Nutricionista</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <HiOutlineOfficeBuilding />
              <p className="ml-3">Clínica del Sur</p>
            </div>
            <div className="flex flex-row items-center">
              <IoLocationOutline />
              <p className="ml-3">Av. Las flores</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[25px] font-bold mx-10 mt-8 text-blueDeep">
        Disponibilidad
      </p>

      <div className="flex flex-row mb-5">
        <div>
          <p className="text-[19px] font-bold mx-10 mt-8 text-blueDeep">
            Días:
          </p>
          <p className="text-[19px] mx-10 mt-1 text-blueDeep">
            Lunes a Viernes
          </p>
        </div>

        <div>
          <p className="text-[19px] font-bold mx-10 mt-8 text-blueDeep">
            Horarios:
          </p>
          <p className="text-[19px] mx-10 mt-1 text-blueDeep">
            07:00 AM - 12:00 PM
          </p>
        </div>
      </div>

      <p className="text-[19px] font-bold mx-10 mt-8 text-blueDeep">
        !!! CALENDARIO !!!
      </p>

      <div className="flex items-center justify-center mt-10">
        <Link to="/schedule">
          <button className="bg-main-bg text-white w-[170px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
            Solicitar turno
          </button>
        </Link>
      </div>

      <p className="text-[25px] font-bold mx-10 mt-8 mb-4 text-blueDeep">
        Servicios
      </p>

      <div className="flex flex-col mx-8">
        <div className="flex flex-row mb-3">
          <div className="bg-[#EEF2FF] text-[#4338CA] rounded-3xl w-auto text-center px-3 mx-1">
            Planes alimentario
          </div>
          <div className="bg-[#EEF2FF] text-[#4338CA] rounded-3xl w-auto text-center px-3 mx-1">
            Consultas
          </div>
          <div className="bg-[#EEF2FF] text-[#4338CA] rounded-3xl w-auto text-center px-3 mx-1">
            Controles
          </div>
        </div>
        <div className="flex flex-row">
          <div className="bg-[#EEF2FF] text-[#4338CA] rounded-3xl w-auto text-center px-3 mx-1">
            Dietas saludables
          </div>
          <div className="bg-[#EEF2FF] text-[#4338CA] rounded-3xl w-auto text-center px-3 mx-1">
            Nutrición infanto - juvenil
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ScheduleScreen;
