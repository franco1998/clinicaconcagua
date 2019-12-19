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
