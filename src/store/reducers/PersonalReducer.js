const initState = {
  Profesional: null,
  Id: null,
};

const PersonalReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'FIND_PROF':
      console.log('profesional encontrado', action.p);
      state.Profesional = action.p;
      state.Id= action.id;
      return state;
    default:
      return state;
    }
}
export default PersonalReducer;
