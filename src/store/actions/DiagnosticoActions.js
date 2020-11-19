export const NuevoDiag = (idInt, detalle) =>{
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase =getFirebase();
    const dia = new Date();
    const user= firebase.auth().currentUser;
    const diagnostico = {
      fecha: dia,
      doctor:null,
      internacion: idInt,
      detalle:detalle,
    }
    firestore.collection("Profesional").doc(user.uid)
    .get()
    .then((encontrado) => {
      firestore.collection("Profesional").get().then(
        (query) => {
          query.forEach((prof) => {
            if(prof.id == encontrado.id){
              diagnostico.doctor = prof.data()
            }
          });

      firestore.collection('Diagnostico').add({
        ...diagnostico,
      }).then(() => {
        dispatch({type:'CREATE_DIAGNOSTICO', diagnostico});
      }).catch((err)=>{
        dispatch({type: 'CREATE_DIAGNOSTICO_ERROR', err});
      })})
    });
  }
};

export const extraer = (idInt) =>{
  return( dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    var diagnosticos=[];
    firestore.collection("Diagnostico").orderBy("fecha","desc")
    .get()
    .then((encontrado) => {
      encontrado.forEach( (doc) => {
        diagnosticos.push(doc.data());
     });
      dispatch({type: 'BUSCAR_DIAGNOSTICO', diagnosticos});
    }).catch((err) => {
        console.log("Error getting documents: ", err)});
  }
};
