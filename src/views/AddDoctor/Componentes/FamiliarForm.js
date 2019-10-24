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
import esp from 'date-fns/locale/es';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default class FamForm extends React.Component {
    constructor(props){
      super(props);
      this.state={
        tDoc: ['DNI' , 'CI', 'LE', 'LC'],
        Doc:'-',
        selectedDate:new Date(),
        emergencia: props.emergencia,
      }
    }

    agregar (){
       let nombre = document.getElementById('Nombre').value;
       let apellido = document.getElementById('Apellido').value;
       let dni = document.getElementById('TipoD').value +" "+ document.getElementById('DNI').value;
       let nacimiento = this.state.selectedDate.getDate() + "/" + (this.state.selectedDate.getMonth()+1) + "/" + this.state.selectedDate.getFullYear();
       let vinculo = document.getElementById('Vinculo').value;
       let telefono = document.getElementById('Telefono').value;
       this.state.emergencia.push(nombre, apellido, dni, nacimiento, vinculo, telefono);
     }

    handleChange = event => {
    this.setState({Doc:event.target.value});
  };

   handleDateChange = date => {
    this.setState({selectedDate:date});
  };

  render(){
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          Datos del contacto de emergencia.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Nombre"
              name="Nombre"
              label="Nombre/s"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Apellido"
              name="Apellido"
              label="Apellido/s"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="TipoD">Tipo Doc</InputLabel>
          <Select
            value={this.state.Doc}
            onChange={this.handleChange}
            fullWidth
            inputProps={{
              name: "Doc",
              id: 'TipoD',
            }}
          >
          {this.state.tDoc.map((label, index) => (
              <MenuItem value={label}>{label}</MenuItem>
          ))}
          </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="DNI"
              name="DNI"
              label="N° de documento"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esp}>
              <KeyboardDatePicker
                margin="normal"
                id="FechaNac"
                label="Fecha de Nacimiento"
                format="dd/MM/yyyy"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="Vinculo"
              name="Vinculo"
              label="Vinculo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Telefono"
              name="Telefono"
              label="Telefono de contacto"
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
