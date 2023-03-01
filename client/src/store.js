import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  createTurnReducer,
  deleteTurnReducer,
  getTurnReducer,
  updateTurnReducer,
  userLoginReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  getTurn: getTurnReducer,
  postTurn: createTurnReducer,
  updateTurn: updateTurnReducer,
  deleteTurn: deleteTurnReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const clinicInfoFromStorage = localStorage.getItem('clinicInfo')
  ? JSON.parse(localStorage.getItem('clinicInfo'))
  : null;

const doctorInfoFromStorage = localStorage.getItem('doctorInfo')
  ? JSON.parse(localStorage.getItem('doctorInfo'))
  : null;

const turnInfoFromStorage = localStorage.getItem('turnInfo')
  ? JSON.parse(localStorage.getItem('turnInfo'))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
    clinicInfo: clinicInfoFromStorage,
    doctorInfo: doctorInfoFromStorage,
  },
  getTurn: {
    turnInfo: turnInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
