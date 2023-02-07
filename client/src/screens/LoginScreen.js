import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../actions/userActions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <div>LoginScreen</div>;
};

export default LoginScreen;
