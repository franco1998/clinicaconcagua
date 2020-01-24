export const asignar = (info, paciente) =>{
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const dia = new Date();
    const internacion = {
      cama: info.cama,
      piso: info.piso,
      seccion: info.seccion,
      paciente: paciente.Documento,
      fechaIngreso: dia,
    }
    firestore.collection('Internacion').add({
      ...internacion,
    }).then(() => {
      dispatch({type:'CREATE_INTERNACION', internacion});
    }).catch((err)=>{
      dispatch({type: 'CREATE_INTERNACION_ERROR', err});
    })

  }
};
