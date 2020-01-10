const initState = {
  Personal: [
    {
      Nombre:'',
      Celular:'',
      Email:'',
      Documento: '',
      Profesion: '',
      Especialidad:'',
    }
  ]
};

const PersonalReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_PERSONAL':
      console.log('profesional creado', action.Personal);
      return state;
    case 'CREATE_PERSONAL_ERROR':
      console.log('Error', action.err);
      return state;
    default:
      return state;
  }
}

export default PersonalReducer;
