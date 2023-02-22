import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

import avatar from '../assets/avatar.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ScheduleScreen = () => {
  const { id } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { doctorInfo } = userLogin;

  const doctor = doctorInfo.data[id - 1];

  return (
    <div>
      <Header />

      <div className="md:flex md:mb-20">
        <div>
          <p className="text-[40px] md:text-[60px] font-bold mx-10 md:mx-20 my-10 text-blueDeep">
            Solicitud de turno
          </p>

          <div className="flex items-center justify-center">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full w-[150px] md:w-[200px] mr-5 md:mr-10"
            />
            <div className="flex flex-col">
              <h5 className="font-bold text-[35px] mb-3">
                {doctor.nombre} {doctor.apellido}
              </h5>

              <div className="bg-green-100 text-green-800 rounded-3xl w-[120px] text-center mb-5">
                <p>{doctor.especialidad}</p>
              </div>

              <div className="flex">
                <div className="flex flex-row items-center">
                  <HiOutlineOfficeBuilding />
                  <p className="ml-3">{doctor.clinica.nombre}</p>
                </div>
                <div className="flex flex-row items-center ml-3">
                  <IoLocationOutline />
                  <p className="ml-2">{doctor.clinica.direccion}</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[25px] font-bold md:mx-20 mx-10 mt-8 text-blueDeep">
            Disponibilidad
          </p>

          <div className="flex flex-row mb-5 md:mx-10">
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
        </div>

        <div className="flex flex-col justify-center">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ScheduleScreen;
