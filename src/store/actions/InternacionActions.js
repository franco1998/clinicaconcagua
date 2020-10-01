export const asignar = (info, id) =>{
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase =getFirebase();
    const dia = new Date();
    const user= firebase.auth().currentUser;
    const internacion = {
      cama: info.cama,
      piso: info.piso,
      seccion: info.seccion,
      Idpaciente: id,
      fechaIngreso: dia,
      Medico:null,
    }
    const med= firestore.collection("Profesional").doc(user.uid)
    .get()
    .then((encontrado) => {
      console.log("blabla", encontrado);
      internacion.Medico=encontrado.id;
      console.log(internacion.Medico);
      firestore.collection('Internacion').add({
        ...internacion,
      }).then(() => {
        dispatch({type:'CREATE_INTERNACION', internacion});
      }).catch((err)=>{
        dispatch({type: 'CREATE_INTERNACION_ERROR', err});
      })
    });


  }
};

export const buscarI = ( cama) =>{
  return( dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    var int= '';
    var id ='';
    firestore.collection("Internacion").where("cama", "==", cama)
    .get()
    .then((encontrado) => {
       encontrado.forEach( (doc) => {
         int = doc.data();
         id= doc.id
      });
      dispatch({type: 'FIND_INT', int, id});
    }).catch((err) => {
        console.log("Error getting documents: ", err)});
  }
};
