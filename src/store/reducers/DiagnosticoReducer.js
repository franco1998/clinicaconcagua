const initState = {
  Diagnosticos: [],
};

const DiagnosticoReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_DIAGNOSTICO':
      console.log('Diagnostico', action.diagnostico);
      return state;
    case 'CREATE_DIAGNOSTICO_ERROR':
      console.log('Error', action.err);
      return state;
    case 'BUSCAR_DIAGNOSTICO':
      state.Diagnosticos = action.diagnosticos;
      return state;
    default:
      return state;
  }
}

export default DiagnosticoReducer;
