const initState = {
  Internacion: null,
  Id: null,
};

const InternacionReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_INTERNACION':
      console.log('Internacion creado');
      return state;
    case 'CREATE_INTERNACION_ERROR':
      console.log('Error', action.err);
      return state;
    case 'FIND_INT':
      state.Internacion=action.int;
      state.Id=action.id;
      return state;
    case 'DAR_ALTA':
      console.log('EL paciente fue dado de alta');
      return state;
    case 'ERROR_ALTA':
      console.log("El paciente no fue dado de alta", action.err);
      return state;
    default:
      return state;
  }
}

export default InternacionReducer;
