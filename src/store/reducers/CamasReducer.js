const initState = {
  Cama: null,
  Paciente: null,
};

const PacientesReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_CAMA':
      console.log('Cama creada', action.paciente);
      return state;
    case 'CREATE_CAMA_ERROR':
      console.log('Error', action.err);
      return state;
    case 'ADD_PAT':
      // state.Cama=action.p;
      // state.Paciente =action.id;
      return state;
    default:
      return state;
  }
}

export default CamasReducer;
