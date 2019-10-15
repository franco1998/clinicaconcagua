import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const validar = (props) => {
  let nombre = document.getElementById('Nombres')
  let apellidos = document.getElementById('Apellidos')
  let DNI = document.getElementById('DNI')
  let direccion = document.getElementById('Direccion')
  let ciudad = document.getElementById('Ciudad')
  let provincia = document.getElementById('Provincia')
  let celular = document.getElementById('Celular')
  let telefono = document.getElementById('Telefono')
  let especialidad = document.getElementById('Especialidad')
  if(props.enviar){
    if(!nombre.value){
      props.error = true
    }else{
      props.error = false
    }
  }else{
    console.log('se rompio')
  }
  

}
export default function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos Personales.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={false}
            id="Nombres"
            name="Nombres"
            label="Nombres"
            fullWidth
            autoComplete="Nombres"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Apellidos"
            name="Apellidos"
            label="Apellidos"
            fullWidth
            autoComplete="Apellidos"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="DNI"
            name="DNI"
            label="DNI"
            fullWidth
            autoComplete="DNI"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Direccion"
            name="Direccion"
            label="Dirección"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Ciudad"
            name="Ciudad"
            label="Ciudad"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="Provincia" name="Provincia" label="Provincia" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="billing Email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Celular"
            name="Celular"
            label="Celular"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Telefono"
            name="Telefono"
            label="Telefono"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Especialidad"
            name="Especialidad"
            label="Especialidad"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
