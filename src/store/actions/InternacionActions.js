export const createInternacion = (cama, paciente) =>{
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase =getFirebase();
    const dia = new Date();
    const user= firebase.auth().currentUser;
    const internacion = {
      cama: cama,
      paciente:paciente,
      fechaIngreso: dia,
      Medico:null,
      fechaEgreso:null,
      estudioPendiente: 0,
      idHoja:null,
    }
    const med= firestore.collection("Profesional").doc(user.uid)
    .get()
    .then((encontrado) => {
      internacion.Medico=encontrado.id;
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
