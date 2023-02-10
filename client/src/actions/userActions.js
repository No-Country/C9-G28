import axios from 'axios';
import dummy from '../data/dummy';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  EMAIL_VERIFICATION,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const usuarios = await axios.get('/usuarios/', config);

    const data = usuarios.data.filter((usuario) => usuario.email === email);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};

// Action para enviar el email del usuario cuanto requiere restablecer la contraseña
// se envia al back para validar si esta registrado
export const validationEmail = (email) => (dispatch) => {
  dispatch({ type: EMAIL_VERIFICATION });

  const emailOk = dummy.filter((user) => user.email === email);

  if (emailOk.length) {
    return true;
  } else {
    return false;
  }
};
