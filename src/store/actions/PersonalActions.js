export const buscarP = (especialidad) =>{
  return( dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    const p= [];
    const id = [];
    firestore.collection("Profesional").where("Especialidad", "==", especialidad)
    .get()
    .then((encontrado) => {
       encontrado.forEach( (doc) => {
         console.log(doc.data());
         p.push(doc.data());
         id.push(doc.id);
      });
      dispatch({type: 'FIND_PROF', p, id});
    }).catch((err) => {
        console.log("Error getting documents: ", err)});
  }
};
