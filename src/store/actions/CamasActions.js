export const asignarP = (paciente, id) => {
  return( dispatch, getState, {getFirebase, getFirestore} ) => {
      const firestore = getFirestore()
      firestore.collection('Camas').doc(id).update("paciente", paciente).then(
      ()=>{dispatch({type: 'ADD_PAT'})}
    ).catch((err) => {console.log("Error asignando paciente: ", err)})
  }
};

export const liberarCama = (idCama) =>{
  return(dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore = getFirestore()
    firestore.collection("Camas").doc(idCama).update("paciente", null)
    .then(
      () => {dispatch({type:"LIBERAR_CAMA"})}
    ).catch((err) => {dispatch({type:"ERROR_LIBERAR"})})
  }
}
