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

    const token = await axios.post('/generate-token', {
      username: email,
      password: password,
    });

    const config = {
      headers: {
        Authorization: `Bearer ${token.data.token}`,
      },
    };

    const data = await axios.get('/actual-usuario', config);

    const dataClinic = await axios.get('/clinica/', config);

    const dataDoctor = await axios.get('/medicos/', config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
      clinic: dataClinic,
      doctor: dataDoctor,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
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

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('clinicInfo');
  localStorage.removeItem('doctorInfo');
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
    const create = await axios.post('/usuarios/', data);

    if (create.data.id) {
      return true;
    }
  } catch (error) {
    // console.log('Error al crear cuenta>>>>>', error)
    return false;
  }
};
