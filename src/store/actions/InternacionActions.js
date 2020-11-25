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
      doctor:null,
      fechaEgreso:null,
      estudioPendiente: 0,
      idHoja:null,
      alimentacion:{
        medico:null,
        detalle:null,
        fechaCambio:null,
      }
    }
    firestore.collection("Profesional").doc(user.uid)
    .get()
    .then((encontrado) => {
      firestore.collection("Profesional").get().then(
        (query) => {
          query.forEach((prof) => {
            if(prof.id == encontrado.id){
              internacion.doctor = prof.data()
              console.log(internacion)
            }
          });
      firestore.collection('Internacion').add({
        ...internacion,
      }).then(() => {
        console.log(internacion);
        dispatch({type:'CREATE_INTERNACION', internacion});
      }).catch((err)=>{
        dispatch({type: 'CREATE_INTERNACION_ERROR', err});
      })})
    });
  }
};

export const buscarI = (cama) =>{
  return( dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    var int= '';
    var id ='';
    firestore.collection("Internacion").where("fechaEgreso", "==", null)
    .get()
    .then((encontrado) => {
         int = encontrado.docs;
      dispatch({type: 'FIND_INT', int, id});
    }).catch((err) => {
        console.log("Error getting documents: ", err)});
  }
};

export const darAlta = (id) =>{
  return( dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const dia = new Date();
    firestore.collection("Internacion").doc(id).update("fechaEgreso", dia).then(() => {
      dispatch({type:"DAR_ALTA"});
    }).catch((err) => {
      dispatch({ type: "ERROR_ALTA" , err})
    });
  }
}

export const cambiarAlim = (idInternacion, detalle) => {
  return( dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore= getFirestore();
    const firebase = getFirebase();
    const dia=new Date();
    const alimentacion = {
        medico:null,
        detalle: detalle,
        fechaCambio: dia,
    };
    const user= firebase.auth().currentUser;
    firestore.collection("Profesional").doc(user.uid)
    .get()
    .then((encontrado) => {
      firestore.collection("Profesional").get().then(
        (query) => {
          query.forEach((prof) => {
            if(prof.id == encontrado.id){
              alimentacion.medico = prof.data()
            }
          });
      firestore.collection('Internacion').doc(idInternacion).update("alimentacion", alimentacion)
      .then(() => {
        dispatch({type:'CAMBIAR_ALIMENTACION', alimentacion});
      }).catch((err)=>{
        dispatch({type: 'CAMBIAR_ALIMENTACION_ERROR', err});
      })})})
    }
  }
