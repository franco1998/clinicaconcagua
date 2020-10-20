export const asignarP = (paciente, id, seccion) => {
  return( dispatch, getState, {getFirebase, getFirestore} ) => {
      const firestore = getFirestore()
      console.log("HERE " + id)
      firestore.collection('Camas').doc(id).set({
        paciente:paciente,
        seccion: seccion,
      }).then(
      ()=>{dispatch({type: 'ADD_PAT'})}
    ).catch((err) => {console.log("Error asignando paciente: ", err)})
  }
};
