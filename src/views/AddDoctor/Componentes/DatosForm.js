import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DatosForm = props => {

  const [values, setValues] = React.useState({
    Doc: '',
    OSocial: '',
  });

  const { paciente } = props;

  const Doc = ['DNI' , 'CI', 'LE', 'LC'];
  const ObS = ['PAMI', 'OSDE'];

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const agregar = () =>{
    let nombre = document.getElementById('Nombre').value;
    let apellido = document.getElementById('Apellido').value;
    let dni = document.getElementById('TipoD').value + document.getElementById('DNI').value;
    let nacimiento = selectedDate.toDateString();
    let direccion = document.getElementById('Direccion').value;
    let os = document.getElementById('OSocial').value + " " + document.getElementById('Nafiliado').value;
    let art = document.getElementById('ART').value;
    let siniestro = document.getElementById('Nsiniestro').value;
    art += " " +siniestro;
    paciente.push(nombre, apellido, dni, nacimiento, direccion, os, art);
    alert(paciente);
  }

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos Personales.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nombre"
            name="Nombre"
            label="Nombre/s"
            fullWidth
            autoComplete="Nombre"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Apellido"
            name="Apellido"
            label="Apellido/s"
            fullWidth
            autoComplete="Apellido"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel htmlFor="TipoD">Tipo Doc</InputLabel>
        <Select
          value={values.Doc}
          onChange={handleChange}
          fullWidth
          inputProps={{
            name: "Doc",
            id: 'TipoD',
          }}
        >
        {Doc.map((label, index) => (
            <MenuItem value={label}>{label}</MenuItem>
        ))}
        </Select>
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
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="FechaNac"
              label="Fecha de Nacimiento"
              format="dd/MM/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
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
          <InputLabel htmlFor="OSocial">Obra Social</InputLabel>
          <Select
            value={values.OSocial}
            onChange={handleChange}
            name="OSocial"
            fullWidth
            inputProps={{
              id: 'OSocial',
            }}
          >
          {ObS.map((label, index)=>(
            <MenuItem value={label}>{label}</MenuItem>
          ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="Nafiliado"
            name="Nafiliado"
            label="Numero de afiliado"
            autoComplete="billing Nafiliado"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ART"
            name="ART"
            label="ART"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Nsiniestro"
            name="NSiniestro"
            label="Numero de Denuncia o Siniestro"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default DatosForm;
