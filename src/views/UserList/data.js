import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    nombre: 'Alexa',
    apellido:'Richardson',
    direccion: {
      ciudad: 'Atlanta',
      calle: '4894  Lakeland Park Drive'
    },
    email: 'alexa.richardson@devias.io',
    celular: '770-635-2682',
    profesion: 'Enfermero'
  },
  {
    id: uuid(),
    nombre: 'Hernan',
    apellido:'Juarez',
    direccion: {
      ciudad: 'Villa Mercedes',
      calle: 'Cordoba 1267'
    },
    email: 'HernanJuarez@gmail.com',
    celular: '770-635-2682',
    profesion: 'Cardiologo'
  }
];
