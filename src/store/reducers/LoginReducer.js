const initState = {
  authError: null,
}

const LoginReducer = (state=initState, action) =>{
  switch (action.type) {
    case 'ERROR_LOGIN':
      console.log('Logeo erroneo');
      return{
        ...state,
        authError:"Error al logear",
      }
    case 'LOGIN_SUCCESS':
      console.log('Logeo Logrado');
      return{
        ...state,
        authError: null,
      }
      case 'SIGNOUT_SUCCESS':
        console.log('saliendo..');
        return state;
      case 'SIGNUP_SUCCESS':
        console.log('registro completp');
        return {
            ...state,
            authError:null,
        }
      case 'SIGNUP_ERROR':
      console.log('Error Registro');
        return {
          ...state,
          authError: action.err.message,
        }
    default:
      return state;
  }
}

export default LoginReducer
