import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class DatosForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      usuario: props.usuario,
      personal:props.personal,
      profesion: ['Administrativo', 'Medico', 'Enfermero/a', 'Jefe/a enfermeria'],
      especialidad:['Cardiología', 'Cirugía', 'Clínica Medica', 'Dermatología', 'Ginecología', 'Kinesiología', 'Nefrología', 'Neurología', 'Oncología', 'Traumatología', 'Urología'],
      prof:'-',
      esp:'-',
    }
  }

 agregar (){
    this.state.personal.Celular = document.getElementById('Celular').value;
    this.state.personal.Email = document.getElementById('Email').value;
    this.state.personal.Documento = document.getElementById('DNI').value;
    this.state.personal.Profesion = document.getElementById('Profesion').value;
    this.state.personal.Especialidad = document.getElementById('Especialidad').value;
    this.state.personal.password=document.getElementById('DNI').value;
  }



  handleChange = event => {
    this.setState(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };



  handleDateChange = date => {
    this.setState({
      selectedDate:date,
    });
  };

  render(){
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          Datos del nuevo profesional.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type={'number'}
              id="DNI"
              name="DNI"
              label="N° de documento"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="profesion">Profesion</InputLabel>
              <Select
                value={this.state.prof}
                onChange={this.handleChange}
                fullWidth
                inputProps={{
                  name: "prof",
                  id: 'Profesion',
                }}
              >
                {this.state.profesion.map((label, index) => (
                    <MenuItem value={label}>{label}</MenuItem>
                ))}
              </Select>
          </Grid>
          { this.state.prof==='Medico' ?
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="TipoD">Especialidad</InputLabel>
              <Select
                value={this.state.esp}
                onChange={this.handleChange}
                fullWidth
                inputProps={{
                  name: "esp",
                  id: 'Especialidad',
                }}
              >
                {this.state.especialidad.map((label, index) => (
                    <MenuItem value={label}>{label}</MenuItem>
                ))}
              </Select>
          </Grid>
           :
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="TipoD">Especialidad</InputLabel>
              <Select
                value={this.state.esp}
                onChange={this.handleChange}
                fullWidth
                disabled
                inputProps={{
                  name: "esp",
                  id: 'Especialidad',
                }}
              >
              </Select>
          </Grid>
        }
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type='email'
              id="Email"
              name="email"
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type={'number'}
              id="Celular"
              name="Telefono"
              label="Celular"
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default DatosForm;
