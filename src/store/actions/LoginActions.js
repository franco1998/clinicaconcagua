export const singIn = (credentials) => {
  return(dispatch, getState, {getFirebase})=>
  {
    const firebase= getFirebase();


    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    ).then(()=>{
      dispatch({type: 'LOGIN_SUCCESS'});
    }).catch((err)=>{
      dispatch({ type: 'ERROR_LOGIN', err});
    });
  }
}

export const signOut = () =>{
   return( dispatch, getState, { getFirebase}) =>{
     const firebase= getFirebase();

     firebase.auth().signOut().then(() => {
       dispatch({ type: 'SIGNOUT_SUCCESS'});
     })
   }
}

export const signUp = (newUser) =>{
  return (dispatch, getState, {getFirebase, getFirestore}) =>{
    const firebase = getFirebase();
    const firestore= getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.Email,
      newUser.password,
    ).then((resp)=> {
      return firestore.collection('Profesional').doc(resp.user.uid ).set({
        Nombre:"",
        Celular: newUser.Celular,
        Email: newUser.Email,
        Documento: newUser.Documento,
        Profesion: newUser.Profesion,
        Especialidad: newUser.Especialidad,
      })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch(err=>{
      dispatch({ type:'SIGNUP_ERROR', err})
    })
  }
}
