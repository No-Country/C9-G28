import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

import avatar from '../assets/avatar.jpg';

import imageHome from '../assets/logo-home.png';
import imageSearch from '../assets/home-search.png';

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  return (
    <div>
      <Header />

      <p className="text-[40px] font-bold mx-10 mt-10 text-blueDeep">
        Buen día, {userInfo[0].nombre}!
      </p>
      <p className="text-[30px] font-bold mx-10 mt-2 text-blueDeep">
        Aun no tienes turnos agendados
      </p>

      <div className="flex justify-center my-7">
        <img src={imageHome} alt="logo home" className="w-100" />
      </div>

      <div className="flex items-center justify-center mt-10">
        <Link to="/specialists">
          <button className="bg-main-bg text-white w-[200px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
            Agendar tu turno
          </button>
        </Link>
      </div>

      <p className="text-[25px] font-bold mx-10 mt-8 text-blueDeep">
        Centros de salud cerca de ti
      </p>

      <ScrollMenu>
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
      </ScrollMenu>

      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#EEF2FF] text-[#4338CA] w-[150px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
          Ver todo
        </button>
      </div>

      <p className="text-[25px] font-bold mx-10 mt-8 text-blueDeep">
        Profesionales vistos recientemente
      </p>

      <div className="flex justify-center my-7">
        <img src={imageSearch} alt="logo home" className="w-100" />
      </div>

      <p className="text-[15px] text-center mx-10 mt-8 text-blueDeep">
        Aún no has visto ningún especialista
      </p>

      <div className="flex items-center justify-center mt-10">
        <Link to="/specialists">
          <p className="bg-[#EEF2FF] text-[#4338CA] w-[200px] py-3 pl-7 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
            Buscar especialistas
          </p>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default HomeScreen;
