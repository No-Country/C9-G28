import axios from 'axios';
import dummy from '../data/dummy';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  EMAIL_VERIFICATION,
  TURN_CREATE_REQUEST,
  TURN_CREATE_SUCCESS,
  TURN_CREATE_FAIL,
  TURN_DELETE_REQUEST,
  TURN_DELETE_SUCCESS,
  TURN_DELETE_FAIL,
  TURN_GET_REQUEST,
  TURN_GET_SUCCESS,
  TURN_GET_FAIL,
  TURN_UPDATE_REQUEST,
  TURN_UPDATE_SUCCESS,
  TURN_UPDATE_FAIL,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    let dataUser = await axios.get(
      'https://no-country-prueba.onrender.com/usuarios/'
    );
    dataUser = dataUser.data.filter((item) =>
      item.username === email && password ? item : null
    );

    const dataClinic = await axios.get(
      'https://no-country-prueba.onrender.com/clinica/'
    );

    const dataDoctor = await axios.get(
      'https://no-country-prueba.onrender.com/medicos/'
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: dataUser,
      clinic: dataClinic,
      doctor: dataDoctor,
    });

    localStorage.setItem('userInfo', JSON.stringify(dataUser));
    localStorage.setItem('clinicInfo', JSON.stringify(dataClinic));
    localStorage.setItem('doctorInfo', JSON.stringify(dataDoctor));
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

export const getTurn = () => async (dispatch) => {
  try {
    dispatch({
      type: TURN_GET_REQUEST,
    });

    const user = JSON.parse(localStorage.getItem('userInfo'));

    let getTurn = await axios.get(
      `https://no-country-prueba.onrender.com/turnos/`
    );
    getTurn = getTurn.data.filter((item) => item.usuario.id === user[0].id);

    dispatch({
      type: TURN_GET_SUCCESS,
      payload: getTurn,
    });

    localStorage.setItem('turnInfo', JSON.stringify(getTurn));
  } catch (error) {
    dispatch({
      type: TURN_GET_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createTurn = (medicId, date) => async (dispatch) => {
  try {
    dispatch({
      type: TURN_CREATE_REQUEST,
    });

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const data = {
      usuario: {
        id: user[0].id,
      },
      medico: {
        id: Number(medicId),
      },
      fecha: date,
    };

    let dataPost = await axios.post(
      'https://no-country-prueba.onrender.com/turnos/',
      data
    );

    dispatch({
      type: TURN_CREATE_SUCCESS,
      payload: dataPost,
    });

    dispatch(getTurn());
  } catch (error) {
    dispatch({
      type: TURN_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateTurn = (id, medicId, date) => async (dispatch) => {
  try {
    dispatch({
      type: TURN_UPDATE_REQUEST,
    });

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const data = {
      id,
      usuario: {
        id: user[0].id,
      },
      medico: {
        id: Number(medicId),
      },
      fecha: date,
    };

    let dataUpdate = await axios.put(
      `https://no-country-prueba.onrender.com/turnos/`,
      data
    );

    dispatch({
      type: TURN_UPDATE_SUCCESS,
      payload: dataUpdate,
    });

    dispatch(getTurn());
  } catch (error) {
    dispatch({
      type: TURN_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteTurn = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TURN_DELETE_REQUEST,
    });

    const deletePost = await axios.delete(
      `https://no-country-prueba.onrender.com/turnos/${id}`
    );

    dispatch({
      type: TURN_DELETE_SUCCESS,
      payload: deletePost,
    });

    dispatch(getTurn());
  } catch (error) {
    dispatch({
      type: TURN_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('clinicInfo');
  localStorage.removeItem('doctorInfo');
  localStorage.removeItem('turnInfo');
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

// Action que envía el código de verificación al backend para validar en usuario y poder
// resetear al contraseña (funciona con datos dummy mientras se adapta el endpoint en el back)
export const verifyCode = (code) => (dispatch) => {
  let codeDummy = [123456, 987654, 112233];

  const codeUser = codeDummy.find((c) => c === code);

  if (codeUser) {
    return true;
  } else {
    return false;
  }
};

// Action que recibe desde ResetPassword la contraseña actualizada del usuario cuando
// pide restablecer la, por el momento está hardcodeada a la espera de implementar la
// funcionalidad del back
export const resetPassword = (password) => (dispatch) => {
  return true;
};

// Action que envía la data al backend para la creación de usuario en la base de
// datos, ya está enviado el json con los datos al back

export const createUserForm = (data) => async (dispatch) => {
  try {
    const create = await axios.post(
      'https://no-country-prueba.onrender.com/usuarios/',
      data
    );

    if (create.data.id) {
      return true;
    }
  } catch (error) {
    // console.log('Error al crear cuenta>>>>>', error)
    return false;
  }
};
