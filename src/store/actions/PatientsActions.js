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
    const id = [];
    firestore.collection("Paciente").where("Documento", "==", dni)
    .get()
    .then((encontrado) => {
       encontrado.forEach( (doc) => {
         p.push(doc.data());
         id.push(doc.id);
      });
      dispatch({type: 'FIND_PAT', p, id});
    }).catch((err) => {
        console.log("Error getting documents: ", err)});
  }
};
