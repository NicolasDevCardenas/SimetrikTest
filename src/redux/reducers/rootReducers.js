import { combineReducers } from 'redux';
import  buscarConciliacion  from './buscarConciliacionReducer';
import  buscarFuentes  from './buscarFuentesReducer';
import  buscarTableros  from './buscarTablerosReducer';
import  buscarUsuarios  from './buscarUsuariosReducer';

const rootReducers = combineReducers({
  buscarConciliacion,
  buscarFuentes,
  buscarTableros,
  buscarUsuarios,
});

export default rootReducers;
