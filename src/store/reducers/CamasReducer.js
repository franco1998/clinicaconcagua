const initState = {
  Cama: null,
  Paciente: null,
};

const DiagnosticoReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_CAMA':
      console.log('Cama creada', action.paciente);
      return state;
    case 'CREATE_CAMA_ERROR':
      console.log('Error', action.err);
      return state;
    case 'ADD_PAT':
      console.log("Se asigno paciente");
      return state;
    case 'LIBERAR_CAMA':
       console.log("Se libero la cama");
       return state;
    case 'ERROR_LIBERAR':
      console.log("No se pudo liberar la cama", action.err);
      return state
    default:
      return state;
  }
}

export default CamasReducer;
