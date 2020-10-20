
import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
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

class DatosForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Doc:'-',
      OSocial:'-',
      selectedDate: new Date(),
      Docu: ['DNI' , 'CI', 'LE', 'LC'],
      ObS: ['PAMI', 'OSDE'],
      paciente: props.paciente,
    }
  }

  agregar (){
    // expresion regular para solo letras
    var er_string = new RegExp("[A-Za-z]$")
    // expresion regular para numeros
    var er_num = new RegExp("[0-9]$")

    var x;

    if(document.getElementById('Nombre').value == '' || !er_string.test(document.getElementById('Nombre').value)){
      this.setState({
        Nombre:true
      })
      this.state.Nombre = true;
      console.log("EStado nombre = " + this.state.Nombre)
    }else{
      this.setState({
        Nombre:false
      })
      this.state.Nombre = false;
    }
    if(document.getElementById('Apellido').value== '' || !er_string.test(document.getElementById('Apellido').value)){
      this.setState({
        Apellido:true
      })
        this.state.Apellido=true
    }else{
      this.setState({
        Apellido:false
      })
      this.state.Apellido=false
    }

    var dni = document.getElementById('DNI').value
    var sacandopuntos = dni.split('.')
    dni = sacandopuntos.join(' ')

    if(dni == '' || !er_num.test(dni) || dni.length < 7 || dni.length > 8 ){
      this.setState({
        DNI:true
      })
      this.state.DNI=true
    }else{
      this.setState({
        DNI:false
      })
      this.state.DNI=false
    }
    if(document.getElementById('Direccion').value==''){
      this.setState({
        Direccion:true
      })
      this.state.Direccion=true
    }else{
      this.setState({
        Direccion:false
      })
      this.state.Direccion=false
    }
    if(document.getElementById('Nafiliado').value == '' || !er_num.test(document.getElementById('Nafiliado').value)){
      this.state.Nafiliado=true
      this.setState({
        Nafiliado:true
      })
    }else{
      this.setState({
        Nafiliado:false
      })
      this.state.Nafiliado=false
    }
    if(document.getElementById('ART').value=='' || !er_string.test(document.getElementById('ART').value)){
      this.state.ART=true
      this.setState({
        ART:true
      })
    }else{
      this.setState({
        ART:false
      })
      this.state.ART=false
    }
    if(document.getElementById('NSiniestro').value=='' || !er_num.test(document.getElementById('NSiniestro').value)){
      this.state.NSiniestro=true
      this.setState({
        NSiniestro:true
      })
    }else{
      this.setState({
        NSiniestro:false
      })
      this.state.NSiniestro=false
    }
    if(!this.state.Nombre && !this.state.Apellido && !this.state.Direccion && !this.state.Nafiliado && !this.state.NSiniestro && !this.state.DNI && !this.state.ART){
      x = true
      this.state.paciente.Nombre = document.getElementById('Nombre').value + " " + document.getElementById('Apellido').value;
      this.state.paciente.Documento = document.getElementById('TipoD').value + " " + document.getElementById('DNI').value;
      this.state.paciente.FdeNacimiento = this.state.selectedDate.getDate() + "/" + (this.state.selectedDate.getMonth()+1) + "/" + this.state.selectedDate.getFullYear();
      this.state.paciente.Direccion = document.getElementById('Direccion').value;
      this.state.paciente.Osocial = document.getElementById('OSocial').value;
      this.state.paciente.Nafiliado = document.getElementById('Nafiliado').value;
      this.state.paciente.op= false;
      this.state.paciente.ART = document.getElementById('ART').value;
      this.state.paciente.Nsiniestro = document.getElementById('NSiniestro').value;
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
                Datos del paciente.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error = {this.state.Nombre}
                    helperText={this.state.Nombre ? 'Ingrese solo letras.' : ''}
                    required
                    id="Nombre"
                    name="Nombre"
                    label="Nombre/s"
                    fullWidth

                    onChange={this.handleOnChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    helperText={this.state.Apellido ? 'Ingrese solo letras.' : ''}
                    error = {this.state.Apellido}
                    id="Apellido"
                    name="Apellido"
                    label="Apellido/s"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="TipoD">Tipo Doc</InputLabel>
                <Select
                  value={this.state.Docu[0]}
                  onChange={this.handleChange}
                  fullWidth
                  inputProps={{
                    name: "Doc",
                    id: 'TipoD',
                  }}
                >
                {this.state.Docu.map((label, index) => (
                    <MenuItem value={label}>{label}</MenuItem>
                ))}
                </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    helperText={this.state.DNI ? 'Ingrese solo numeros.' : ''}
                    error = {this.state.DNI}
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
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    error = {this.state.Direccion}
                    helperText={this.state.Direccion ? 'Ingrese una direccion.' : ''}
                    id="Direccion"
                    name="Direccion"
                    label="Dirección"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel htmlFor="OSocial">Obra Social</InputLabel>
                  <Select
                    value={this.state.ObS[0]}
                    onChange={this.handleChange}
                    name="OSocial"
                    fullWidth
                    inputProps={{
                      id: 'OSocial',
                    }}
                  >
                  {this.state.ObS.map((label, index)=>(
                    <MenuItem value={label}>{label}</MenuItem>
                  ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    error = {this.state.Nafiliado}
                    helperText={this.state.Nafiliado ? 'Ingrese un nro de afiliado' : ''}
                    fullWidth
                    id="Nafiliado"
                    name="Nafiliado"
                    label="Numero de afiliado"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="ART"
                    name="ART"
                    label="ART"
                    helperText={this.state.ART ? 'Ingrese solo letras.' : ''}
                    fullWidth
                    error = {this.state.ART}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error = {this.state.NSiniestro}
                    helperText={this.state.NSiniestro ? 'Ingrese solo numeros' : ''}
                    id="NSiniestro"
                    name="NSiniestro"
                    label="Numero de Denuncia o Siniestro"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </React.Fragment>
    );
  }
}
export default DatosForm;
