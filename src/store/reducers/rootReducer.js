import LoginReducer from './LoginReducer.js';
import PacientesReducer from './PacientesReducer.js';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  login: LoginReducer,
  paciente: PacientesReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
