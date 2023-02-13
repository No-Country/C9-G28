import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

import avatar from '../assets/avatar.jpg';

import { logout } from '../actions/userActions';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="bg-main-bg">
      <div className="flex justify-between p-2 ml-2 md:ml-6 md:mr-6 relative">
        <h1 className="text-white font-extrabold text-3xl p-1">
          <Link to="/">MediCare</Link>
        </h1>
        {/* <NavButton
          title="Menu"
          customFunc={() => {}}
          color="white"
          icon={<AiOutlineMenu />}
        /> */}
        <div className="flex">
          <NavButton
            title="Notification"
            dotColor="red"
            customFunc={() => {}}
            color="white"
            icon={<RiNotification3Line />}
          />

          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {}}
          >
            <img className="rounded-full w-8 h-8" src={avatar} alt="avatar" />
          </div>

          <NavButton
            title="LogOut"
            customFunc={() => {
              logoutHandler();
            }}
            color="white"
            icon={<FiLogOut />}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
