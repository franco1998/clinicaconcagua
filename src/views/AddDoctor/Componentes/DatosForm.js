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
    this.state.paciente.Nombre = document.getElementById('Nombre').value + " " + document.getElementById('Apellido').value;
    this.state.paciente.Documento = document.getElementById('TipoD').value + " " + document.getElementById('DNI').value;
    this.state.paciente.FdeNacimiento = this.state.selectedDate.getDate() + "/" + (this.state.selectedDate.getMonth()+1) + "/" + this.state.selectedDate.getFullYear();
    this.state.paciente.Direccion = document.getElementById('Direccion').value;
    this.state.paciente.Osocial = document.getElementById('OSocial').value;
    this.state.paciente.Nafiliado = document.getElementById('Nafiliado').value;
    this.state.paciente.op= false;
    this.state.paciente.ART = document.getElementById('ART').value;
    this.state.paciente.Nsiniestro = document.getElementById('Nsiniestro').value;
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
          {this.state.Docu.map((label, index) => (
              <MenuItem value={label}>{label}</MenuItem>
          ))}
          </Select>
          </Grid>
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
          <Grid item xs={12}>
            <TextField
              required
              id="Direccion"
              name="Direccion"
              label="Dirección"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="OSocial">Obra Social</InputLabel>
            <Select
              value={this.state.OSocial}
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
}
export default DatosForm;
