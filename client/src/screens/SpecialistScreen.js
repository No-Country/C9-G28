import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiFilterAlt } from 'react-icons/bi';
import { IoIosOptions } from 'react-icons/io';

import SpecialistCard from '../components/SpecialistCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

import avatar from '../assets/avatar.jpg';

const SpecialistScreen = () => {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <Header />

      <p className="text-[40px] font-bold mx-10 my-10 text-blueDeep">
        Buscar especialista
      </p>

      <div className="mx-7 items-center">
        <form onSubmit={() => {}}>
          <div className="absolute mt-3.5 ml-3 text-gray-700">
            <BsSearch />
          </div>
          <input
            className="w-full py-2 text-gray-600 outline-none mb-4 border-2 rounded-lg pl-10"
            type="text"
            name="searchSpecialist"
            placeholder={'Buscar especialistas'}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </form>
      </div>

      <div className="flex justify-between items-center mx-10">
        <p className="text-[30px] font-bold mt-2 text-blueDeep">Resultados:</p>

        <div className="flex flex-row">
          <div className="text-gray-700 text-[30px] mr-3">
            <IoIosOptions />
          </div>

          <div className="text-gray-700 text-[30px]">
            <BiFilterAlt />
          </div>
        </div>
      </div>

      <SpecialistCard
        image={avatar}
        name="Dr. Silva"
        hospital="Clínica del Este"
        place="Av. Flor"
        specialist="Pediatra"
      />

      <SpecialistCard
        image={avatar}
        name="Dra. Lopez"
        hospital="Clínica del Sur"
        place="Av. del lago"
        specialist="Oculista"
      />

      <SpecialistCard
        image={avatar}
        name="Dr. Ramos"
        hospital="Clínica del Sur"
        place="Av. del lago"
        specialist="Psicólogo"
      />

      <SpecialistCard
        image={avatar}
        name="Dra. Cano"
        hospital="Clínica del Sur"
        place="Av. del lago"
        specialist="Nutricionista"
      />

      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#EEF2FF] text-[#4338CA] w-[150px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
          Mostrar más
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialistScreen;
