import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux';
import {buscar} from '../../../store/actions/PatientsActions.js'
import esp from 'date-fns/locale/es';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function DatosForm (props)  {
  const [Doc,setDoc] = React.useState('-')
  const [OSocial , setOSocial] = React.useState('-')
  const [selectedDate , setSelectedDate] = React.useState(new Date())
  const Docu= ['DNI' , 'CI', 'LE', 'LC']
  const Obs = ['PAMI', 'OSDE']
  var {paciente, pacienteE} = props;
  const [state, setState] = React.useState({
      Nombre:false,
      Apellido:false,
      DNI:false,
      Direccion:false,
      Nafiliado:false,
      ART:false,
      Nsiniestro:false,
    });

const validacion = (event) => {
      // expresion regular para solo letras
      var er_string = new RegExp("[A-Za-z]$")
      // expresion regular para numeros
      var er_num = new RegExp("[0-9]$")

      switch (event.target.id) {
        case "Nombre":
          if(document.getElementById('Nombre').value == '' || !er_string.test(document.getElementById('Nombre').value)){
            setState({
              Nombre: true,
            });
          }else{
            setState({
              Nombre:false
            });
          }
          break
        case 'Apellido':
          if(document.getElementById('Apellido').value== '' || !er_string.test(document.getElementById('Apellido').value)){
            setState({
              Apellido:true
            })
          }else{
            setState({
              Apellido:false
            })
          }
          break
        case 'DNI':
          var dni = document.getElementById('DNI').value
          var tipo = document.getElementById('TipoD').value
          var sacandopuntos = dni.split('.')
          console.log(sacandopuntos)
          dni = sacandopuntos.join('')


          console.log(pacienteE)
          props.buscar(tipo + " " + dni)
          console.log(props)
          if(dni == '' || !er_num.test(dni) || dni.length < 7 || dni.length > 8  || pacienteE[0] != null){
            setState({
              DNI:true
            })
          }else{
            setState({
              DNI:false
            })
            pacienteE=null;
          }
          break
        case 'Direccion':
          if(document.getElementById('Direccion').value==''){
            setState({
              Direccion:true
            })
          }else{
            setState({
              Direccion:false
            })
          }
          break
        case 'Nafiliado':
          if(document.getElementById('Nafiliado').value == '' || !er_num.test(document.getElementById('Nafiliado').value)){
            setState({
              Nafiliado:true
            })
          }else{
            setState({
              Nafiliado:false
            })
          }
          break
        case 'ART':
          if(document.getElementById('ART').value=='' || !er_string.test(document.getElementById('ART').value)){
            setState({
              ART:true
            })
          }else{
            setState({
              ART:false
            })
          }
          break
        case 'NSiniestro':
            if(document.getElementById('NSiniestro').value=='' || !er_num.test(document.getElementById('NSiniestro').value)){
              setState({
                Nsiniestro:true
              })
            }else{
              setState({
                Nsiniestro:false
              })
            }
          break;
      }

      if(!state.Nombre && !state.Apellido && !state.Direccion && !state.Nafiliado && !state.Nsiniestro && !state.DNI && !state.ART){
        paciente.Nombre = document.getElementById('Nombre').value + " " + document.getElementById('Apellido').value;
        paciente.Documento = document.getElementById('TipoD').value + " " + document.getElementById('DNI').value;
        paciente.FdeNacimiento = selectedDate.getDate() + "/" + (selectedDate.getMonth()+1) + "/" + selectedDate.getFullYear();
        paciente.Direccion = document.getElementById('Direccion').value;
        paciente.Osocial = document.getElementById('OSocial').value;
        paciente.Nafiliado = document.getElementById('Nafiliado').value;
        paciente.op= document.getElementById('OP').checked;
        paciente.ART = document.getElementById('ART').value;
        paciente.Nsiniestro = document.getElementById('NSiniestro').value;
        paciente.siguiente = true
      }else{
        paciente.siguiene=false;
      }
    }

const handleChange = event => {
    setState(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateChange = date => {
    setState({
      selectedDate:date,
    });
  };

    return (
      <React.Fragment>
              <Typography variant="h4" gutterBottom>
                Datos del paciente.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error = {state.Nombre}
                    helperText={state.Nombre ? 'Ingrese solo letras.' : ''}
                    required
                    id="Nombre"
                    name="Nombre"
                    label="Nombre/s"
                    fullWidth
                    onChange={validacion}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    helperText={state.Apellido ? 'Ingrese solo letras.' : ''}
                    error = {state.Apellido}
                    id="Apellido"
                    name="Apellido"
                    label="Apellido/s"
                    fullWidth
                    onChange={validacion}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="TipoD">Tipo Doc</InputLabel>
                <Select
                  value={Docu[0]}
                  onChange={handleChange}
                  fullWidth
                  inputProps={{
                    name: "Doc",
                    id: 'TipoD',
                  }}
                >
                {Docu.map((label, index) => (
                    <MenuItem value={label}>{label}</MenuItem>
                ))}
                </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    helperText={state.DNI ? 'Ingrese solo numeros.' : ''}
                    error = {state.DNI}
                    onChange={validacion}
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
                      value={state.selectedDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    error = {state.Direccion}
                    helperText={state.Direccion ? 'Ingrese una direccion.' : ''}
                    id="Direccion"
                    name="Direccion"
                    label="Dirección"
                    fullWidth
                    onChange={validacion}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel htmlFor="OSocial">Obra Social</InputLabel>
                  <Select
                    value={Obs[0]}
                    onChange={handleChange}
                    name="OSocial"
                    fullWidth
                    inputProps={{
                      id: 'OSocial',
                    }}
                  >
                  {Obs.map((label, index)=>(
                    <MenuItem value={label}>{label}</MenuItem>
                  ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    error = {state.Nafiliado}
                    helperText={state.Nafiliado ? 'Ingrese un nro de afiliado' : ''}
                    fullWidth
                    onChange={validacion}
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
                    helperText={state.ART ? 'Ingrese solo letras.' : ''}
                    fullWidth
                    onChange={validacion}
                    error = {state.ART}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={validacion}
                    error = {state.Nsiniestro}
                    helperText={state.Nsiniestro ? 'Ingrese solo numeros' : ''}
                    id="NSiniestro"
                    name="NSiniestro"
                    label="Numero de Denuncia o Siniestro"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Checkbox name="OP" id="OP" />}
                        label="OP"
                    />
                </Grid>
              </Grid>
            </React.Fragment>
    );
}
const mapStateToProps = (state) => {
  return{
    pacienteE : state.paciente.Paciente,

  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    buscar: (dni)=> dispatch(buscar(dni)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DatosForm);
