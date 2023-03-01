import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
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

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        clinicInfo: action.clinic,
        doctorInfo: action.doctor,
      };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const createTurnReducer = (state = {}, action) => {
  switch (action.type) {
    case TURN_CREATE_REQUEST:
      return { loading: true };

    case TURN_CREATE_SUCCESS:
      return {
        loading: false,
        turnInfo: action.payload,
      };

    case TURN_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const deleteTurnReducer = (state = {}, action) => {
  switch (action.type) {
    case TURN_DELETE_REQUEST:
      return { loading: true };

    case TURN_DELETE_SUCCESS:
      return {
        loading: false,
        deleteTurn: action.payload,
      };

    case TURN_DELETE_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const getTurnReducer = (state = {}, action) => {
  switch (action.type) {
    case TURN_GET_REQUEST:
      return { loading: true };

    case TURN_GET_SUCCESS:
      return {
        loading: false,
        listTurns: action.payload,
      };

    case TURN_GET_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const updateTurnReducer = (state = {}, action) => {
  switch (action.type) {
    case TURN_UPDATE_REQUEST:
      return { loading: true };

    case TURN_UPDATE_SUCCESS:
      return {
        loading: false,
        turnUpdate: action.payload,
      };

    case TURN_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
