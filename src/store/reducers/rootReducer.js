import LoginReducer from './LoginReducer.js';
import PacientesReducer from './PacientesReducer.js';
import PersonalReducer from './PersonalReducer.js';
import UserReducer from './UserReducer.js';
import InternacionReducer from './InternacionReducer.js'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  login: LoginReducer,
  paciente: PacientesReducer,
  personal: PersonalReducer,
  usuario: UserReducer,
  internacion: InternacionReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
