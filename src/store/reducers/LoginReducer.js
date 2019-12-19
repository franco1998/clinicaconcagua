const initState = {
  authError: null,
}

const LoginReducer = (state=initState, action) =>{
  switch (action.type) {
    case 'ERROR_LOGIN':
      return{
        ...state,
        authError:"Error al logear",
      }
    case 'LOGIN_SUCCESS':
      console.log('Logeo Logrado');

  }
  return state
}

export default LoginReducer
