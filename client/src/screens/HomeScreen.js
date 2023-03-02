import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

import imageHome from '../assets/logo-home.png';
import imageSearch from '../assets/home-search.png';
import clinic from '../assets/clinic.jpg';
import TurnCard from '../components/TurnCard';
import { getTurn } from '../actions/userActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTurn());
  }, [dispatch]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, clinicInfo } = userLogin;

  const turns = useSelector((state) => state.getTurn);
  const { listTurns } = turns;

  return (
    <div className="w-screen">
      <Header />

      <p className="text-[40px] font-bold mx-10 md:mx-20 mt-10 text-blueDeep">
        Buen día, {userInfo[0].nombre}!
      </p>

      <div className="flex flex-col md:items-center md:bg-[#EEF2FF] md:mx-[200px] md:my-10 md:p-10">
        <div className="flex flex-col items-center">
          <p className="text-[27px] mx-10 md:text-[35px] font-bold md:text-[#6B7280] md:mb-10">
            {listTurns?.length === 0
              ? 'Aún no tienes turnos agendados'
              : 'Tus turnos'}
          </p>
          {listTurns?.length > 0 ? (
            listTurns?.map((item) => (
              <TurnCard
                key={item.id}
                id={item.id}
                firstName={item.medico.nombre}
                lastName={item.medico.apellido}
                time={item.fecha}
                specialist={item.medico.especialidad}
                medicId={item.medico.id}
              />
            ))
          ) : (
            <div>
              <img src={imageHome} alt="logo home" className="w-100" />
            </div>
          )}
          <div className="mt-10">
            <Link to="/specialists">
              <button className="bg-main-bg text-white w-[200px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
                Agendar tu turno
              </button>
            </Link>
          </div>
        </div>
      </div>

      <p className="text-[25px] font-bold mx-10 md:mx-20 mt-8 text-blueDeep">
        Centros de salud cerca de ti
      </p>

      <div id="entidades" className="mx-10 md:mx-20">
        <ScrollMenu>
          {clinicInfo.data.map((item) => (
            <Card
              key={item.id}
              image={clinic}
              hospital={item.nombre}
              place={item.direccion}
            />
          ))}
        </ScrollMenu>
      </div>

      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#EEF2FF] text-[#4338CA] w-[150px] py-3 rounded-lg hover:bg-violet-100 transition duration-500 shadow-2xl">
          Ver todo
        </button>
      </div>

      <p className="text-[25px] font-bold mx-10 md:mx-20 mt-8 text-blueDeep">
        Vistos recientemente
      </p>

      <p className="text-[25px] font-bold mx-10 md:mx-20 text-[#6B7280] mb-10">
        Aún no has visto ningún especialista
      </p>

      <div className="flex justify-center my-7">
        <img
          src={imageSearch}
          alt="logo home"
          className="w-[300px] md:w-[400px]"
        />
      </div>

      <Footer />
    </div>
  );
};

export default HomeScreen;
