import React from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  return (
    <div>
      <p>Hola {userInfo.email}</p>
    </div>
  );
};

export default HomeScreen;
