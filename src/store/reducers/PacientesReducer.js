const initState = {
  Paciente: [
    {
      Nombre: '',
      Documento: '',
      FdeNacimiento: '',
      Direccion:'',
      Osocial:'',
      op:'',
      Nafiliado:'',
      ART:'',
      Nsiniestro:'',
      NombreE:'',
      DocumentoE:'',
      FdeNacimientoE:'',
      Vinculo:'',
      TelefonoE:'',
    }
  ]
};

const PacientesReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_PATIENT':
      console.log('Paciente creado', action.paciente);
      return state;
    case 'CREATE_PATIENT_ERROR':
      console.log('Error', action.err);
      return state;
    default:
      return state;
  }
}

export default PacientesReducer;
