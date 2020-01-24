export const createPatients = (paciente) =>{
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('Paciente').add({
      ...paciente,
    }).then(() => {
      dispatch({type:'CREATE_PATIENT', paciente});
    }).catch((err)=>{
      dispatch({type: 'CREATE_PATIENT_ERROR', err});
    })

  }
};

export const buscar = (dni) =>{
  return( dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    const p= [];
    firestore.collection("Paciente").where("Documento", "==", dni)
    .get()
    .then((encontrado) => {
       encontrado.forEach( (doc) => {
         p.push(doc.data());
         console.log(dni);
      });
      dispatch({type: 'FIND_PAT', p});
    }).catch((err) => {
        console.log("Error getting documents: ", err)});
  }
};
