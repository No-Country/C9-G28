import React from 'react';
import { useSelector } from 'react-redux';
import HorizontalScroll from 'react-horizontal-scrolling';

import Card from '../components/Card';
import Header from '../components/Header';

import avatar from '../assets/avatar.jpg';

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  return (
    <div className="mb-10">
      <Header />

      <p className="text-[40px] font-bold mx-10 mt-10 text-blueDeep">
        Buen día, {userInfo[0].nombre}!
      </p>
      <p className="text-[30px] font-bold mx-10 mt-2 text-blueDeep">
        Aun no tienes turnos agendados
      </p>

      <div className="flex items-center justify-center mt-10">
        <button className="bg-main-bg text-white w-[200px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
          Agendar tu turno
        </button>
      </div>

      <p className="text-[25px] font-bold mx-10 mt-8 text-blueDeep">
        Centros de salud cerca de ti
      </p>

      <HorizontalScroll>
        <Card
          image={avatar}
          hospital="Clínica del Sur"
          place="Av. del lago"
          specialist="Nutricionista"
        />

        <Card
          image={avatar}
          hospital="Clínica del Sur"
          place="Av. del lago"
          specialist="Nutricionista"
        />

        <Card
          image={avatar}
          hospital="Clínica del Sur"
          place="Av. del lago"
          specialist="Nutricionista"
        />

        <Card
          image={avatar}
          hospital="Clínica del Sur"
          place="Av. del lago"
          specialist="Nutricionista"
        />
      </HorizontalScroll>

      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#EEF2FF] text-[#4338CA] w-[150px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
          Ver todo
        </button>
      </div>

      <p className="text-[25px] font-bold mx-10 mt-8 text-blueDeep">
        Profesionales vistos recientemente
      </p>

      <p className="text-[15px] text-center mx-10 mt-8 text-blueDeep">
        Aún no has visto ningún especialista
      </p>

      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#EEF2FF] text-[#4338CA] w-[200px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
          Buscar especialistas
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
