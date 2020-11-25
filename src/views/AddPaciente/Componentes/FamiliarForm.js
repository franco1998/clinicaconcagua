import React from 'react';
import 'date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import esp from 'date-fns/locale/es';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class FamForm extends React.Component {
    constructor(props){
      super(props);
      this.state={
        tDoc: ['DNI' , 'CI', 'LE', 'LC'],
        vinc: ['Padre/madre','Hijo/a','Hermano/a' , 'Otro'],
        Doc:'-',
        selectedDate:new Date(),
        paciente: props.paciente,
      }
    }

    agregar (){
      // expresion regular para solo letras
      var er_string = new RegExp("[A-Za-z]$")
      // expresion regular para numeros
      var er_num = new RegExp("[0-9]$")
      //expresion para validar TELEFONO
      var er_telefono = new RegExp('^[0-9]{2,3}-? ?[0-9]{6,7}$')

      var res;



      var NombreE = document.getElementById('NombreE').value
      var ApellidoE = document.getElementById('ApellidoE').value
      var TipoD = document.getElementById('TipoD').value
      var DNIE = document.getElementById('DNIE').value
      var VinculoE = document.getElementById('VinculoE').value
      var TelefonoE = document.getElementById('TelefonoE').value
      //VALIDO NOMBRE DE ACOMPAñANTE
      if(document.getElementById('NombreE').value=='' || !er_string.test(NombreE)){
        this.setState({
          NombreE:true
        })
        this.state.NombreE = true;
      }else{
        this.setState({
          NombreE:false
        })
        this.state.NombreE = false;
      }
      //VALIDO APELLIDO
      if(ApellidoE=='' || !er_string.test(ApellidoE)){
        this.setState({
          ApellidoE:true
        })
        this.state.ApellidoE = true;
      }else{
        this.setState({
          ApellidoE:false
        })
        this.state.ApellidoE = false;
      }
      //VALIDO DNIE

      if(DNIE=='' || !er_num.test(DNIE)){
        this.setState({
          DNIE:true
        })
        this.state.DNIE = true;
      }else{
        this.setState({
          DNIE:false
        })
        this.state.DNIE = false;
      }
      //VALIDO TELEFONO
      if(TelefonoE=='' || !er_telefono.test(TelefonoE)){
        this.setState({
          TelefonoE:true
        })
        this.state.TelefonoE = true;
      }else{
        this.setState({
          TelefonoE:false
        })
        this.state.TelefonoE = false;
      }

      if(!this.state.paciente.NombreE && !this.state.paciente.ApellidoE && !this.state.paciente.DNIE && !this.state.paciente.VinculoE && !this.state.paciente.TelefonoE){
        res=true
        this.state.paciente.NombreE = document.getElementById('NombreE').value + " " + document.getElementById('ApellidoE').value;
        this.state.paciente.DocumentoE = document.getElementById('TipoD').value +" "+ document.getElementById('DNIE').value;
        this.state.paciente.FdeNacimientoE = this.state.selectedDate.getDate() + "/" + (this.state.selectedDate.getMonth()+1) + "/" + this.state.selectedDate.getFullYear();
        this.state.paciente.Vinculo = document.getElementById('VinculoE').value;
        this.state.paciente.TelefonoE= document.getElementById('TelefonoE').value;
      }else{
        res=false
      }
      return res

     }

  handleChange = event => {
       this.setState(oldValues => ({
         ...oldValues,
         [event.target.name]: event.target.value,
       }));
  };

  handleDateChange = date => {
    this.setState({selectedDate:date});
  };

  handleOnChange = event => {
    if(event.target.checked){
      this.setState({
        Disabled:true
      })
      this.state.Disabled =true;
    }else{
      this.setState({
        Disabled:false
      })
      this.state.Disabled =false;
    }
  }

  render(){
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          Datos del contacto de emergencia.
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
            <FormControlLabel
              control={
                <Switch
                  onChange={this.handleOnChange}
                  name="MasTarde"
                  id='MasTarde'
                  color="primary"
                />
              }
              label="Agregar mas tarde."
            />
            </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled={this.state.Disabled}
              id="NombreE"
              name="NombreE"
              error = {this.state.NombreE}
              helperText={this.state.NombreE ? 'Ingrese solo letras.' : ''}
              label="Nombre/s"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled={this.state.Disabled}
              id="ApellidoE"
              name="ApellidoE"
              helperText={this.state.ApellidoE ? 'Ingrese solo letras.' : ''}
              error = {this.state.ApellidoE}
              label="Apellido/s"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="TipoD" disabled={this.state.Disabled}>Tipo Doc</InputLabel>
          <Select
            disabled={this.state.Disabled}
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
              disabled={this.state.Disabled}
              id="DNIE"
              name="DNIE"
              helperText={this.state.DNIE ? 'Ingrese un Nro de documento correcto.' : ''}
              error = {this.state.DNIE}
              label="N° de documento"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esp} disabled={this.state.Disabled}>
              <KeyboardDatePicker
                disabled={this.state.Disabled}
                margin="normal"
                id="FechaNac"
                label="Fecha de Nacimiento"
                format="dd/MM/yyyy"
                value={this.state.selectedDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="VinculoE" disabled={this.state.Disabled}>VinculoE</InputLabel>
          <Select
            disabled={this.state.Disabled}
            value={this.state.vinc}
            onChange={this.handleChange}
            fullWidth
            inputProps={{
              name: "vinc",
              id: 'VinculoE',
            }}
          >
          {this.state.tDoc.map((label, index) => (
              <MenuItem value={label}>{label}</MenuItem>
          ))}
          </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled={this.state.Disabled}
              id="TelefonoE"
              name="TelefonoE"
              helperText={this.state.TelefonoE ? 'Ingrese un numero de telefono valido.' : ''}
              error = {this.state.TelefonoE}
              label="Telefono de contacto"
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default FamForm
