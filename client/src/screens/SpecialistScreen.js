import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { BiFilterAlt } from 'react-icons/bi';
import { IoIosOptions } from 'react-icons/io';

import SpecialistCard from '../components/SpecialistCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

import avatar from '../assets/avatar.jpg';

const SpecialistScreen = () => {
  const [filter, setFilter] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { doctorInfo } = userLogin;

  return (
    <div>
      <Header />

      <p className="text-[40px] md:text-[60px] font-bold mx-10 md:mx-20 my-10 text-blueDeep">
        Buscar especialistas
      </p>

      <div className="flex flex-col items-center">
        <div className="mx-7">
          <form onSubmit={() => {}}>
            <div className="absolute mt-3.5 ml-3 text-gray-700">
              <BsSearch />
            </div>
            <input
              className="w-[400px] md:w-[700px] py-2 text-gray-600 outline-none mb-4 border-2 rounded-lg pl-10"
              type="text"
              name="searchSpecialist"
              placeholder={'Buscar especialistas'}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </form>
        </div>

        <div className="flex items-center">
          <p className="text-[30px] font-bold md:mr-[600px] mr-20 mt-2 text-blueDeep">
            Resultados
          </p>

          <div className="flex flex-row ml-20">
            <div className="text-gray-700 text-[30px] mr-3">
              <IoIosOptions />
            </div>

            <div className="text-gray-700 text-[30px]">
              <BiFilterAlt />
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-4">
          {doctorInfo.data.map((item) => (
            <SpecialistCard
              key={item.id}
              id={item.id}
              image={avatar}
              name={item.nombre}
              lastName={item.apellido}
              hospital={item.clinica.nombre}
              place={item.clinica.direccion}
              specialist={item.especialidad}
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button className="bg-[#EEF2FF] text-[#4338CA] w-[150px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
            Mostrar más
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialistScreen;
