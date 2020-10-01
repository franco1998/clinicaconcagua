const initState = {
  Paciente: null,
  Id: null,
};

const PacientesReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_PATIENT':
      console.log('Paciente creado', action.paciente);
      return state;
    case 'CREATE_PATIENT_ERROR':
      console.log('Error', action.err);
      return state;
    case 'FIND_PAT':
      state.Paciente=action.p;
      state.Id =action.id;
      return state;
    default:
      return state;
  }
}

export default PacientesReducer;
