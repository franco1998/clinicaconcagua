export const createPersonal = (personal) =>{
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('Profesional').add({
      ...personal,
    }).then(() => {
      dispatch({type:'CREATE_PERSONAL', personal});
    }).catch((err)=>{
      dispatch({type: 'CREATE_PERSONAL_ERROR', err});
    })

  }
};
