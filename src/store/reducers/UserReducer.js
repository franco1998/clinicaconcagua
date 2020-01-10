const initState = {
  Usuario: [
    {
      Usuario: '',
      Contraseña: '',
    }
  ]
};

const UserReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_USER':
      console.log('Usuario creado', action.Usuario);
      return state;
    case 'CREATE_USER_ERROR':
      console.log('Error', action.err);
      return state;
    default:
      return state;
  }
}

export default UserReducer;
