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
   var er_string = new RegExp("[A-Za-z]$")
   // expresion regular para numeros
   var er_num = new RegExp("[0-9]$")
   // expresion regular para celular
   var er_cel = new RegExp("^[0-9]{2,3}-? ?[0-9]{6,7}$")
   //expreion regular para validar Email
   var er_email = new RegExp('/^(.+\@.+\..+)$/')

   var x;

   if(document.getElementById('Nombre').value == '' || !er_string.test(document.getElementById('Nombre').value)){
     this.setState({
       Nombre:true
     })
     this.state.Nombre = true
   }else{
     this.setState({
       Nombre:false
     })
     this.state.Nombre = false
   }
   if(document.getElementById('Celular').value== '' || !er_cel.test(document.getElementById('Celular').value)){
     this.setState({
       Celular:true
     })
     this.state.Celular = true
   }else{
     this.setState({
       Celular:false
     })
     this.state.Celular = false
   }

   if(document.getElementById('Email').value== '' || !er_email.test(document.getElementById('Email').value)){
     this.setState({
       Email:true
     })
     this.state.Email = true
   }else{
     this.setState({
       Email:false

     })
     this.state.Email = false
   }

   var dni = document.getElementById('DNI').value
   var sacandopuntos = dni.split('.')
   dni = sacandopuntos.join(' ')

   if(dni == '' || !er_num.test(dni) || dni.length < 7 || dni.length > 8 ){
     this.setState({
       DNI:true
     })
     this.state.DNI = true
   }else{
     this.setState({
       DNI:false
     })
     this.state.DNI = false
   }


   if(!this.state.Nombre && !this.state.Celular && !this.state.Email && !this.state.DNI){
     x = true
     this.state.personal.Nombre = document.getElementById('Nombre').value
     this.state.personal.Celular = document.getElementById('Celular').value;
     this.state.personal.Email = document.getElementById('Email').value;
     this.state.personal.Documento = document.getElementById('DNI').value;
     this.state.personal.Profesion = document.getElementById('Profesion').value;
     this.state.personal.Especialidad = document.getElementById('Especialidad').value;
     this.state.personal.password=document.getElementById('DNI').value;
   }else{
     x= false
   }

    return x

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
            type='text'
            id="Nombre"
            name="Nombre"
            label="Nombre"
            error = {this.state.Nombre}
            helperText={this.state.Nombre ? 'Ingrese un nombre valido.' : ''}
            fullWidth
          />
        </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type='text'
              id="DNI"
              name="DNI"
              label="N° de documento"
              error = {this.state.DNI}
              helperText={this.state.DNI ? 'Ingrese un N° de documento valido.' : ''}
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
            <InputLabel htmlFor="TipoD" disabled>Especialidad</InputLabel>
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
              error = {this.state.Email}
              helperText={this.state.Email ? 'Ingrese una direccion de email valido.' : ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type={'number'}
              id="Celular"
              label="Celular"
              fullWidth
              error = {this.state.Celular}
              helperText={this.state.Celular ? 'Ingrese un numero de celular valido.' : ''}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default DatosForm;
