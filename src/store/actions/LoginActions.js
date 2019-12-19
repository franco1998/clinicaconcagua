export const singIn = (credenciales) =>{
  return(dispatch, getState, {getFirebase})=>
  {
    const firebase= getFirebase();


    firebase.auth().singInWithEmailAndPassword(
      credenciales.email,
      credenciales.password,
    ).then(()=>{
      dispatch({type: 'LOGIN_SUCCESS'});
    }).catch(()=>{
      dispatch({ type: 'ERROR_LOGIN'});
    });
  }
}
