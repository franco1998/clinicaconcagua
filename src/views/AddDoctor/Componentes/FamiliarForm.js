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

export default function FamForm() {

  const tDoc = ['DNI' , 'CI', 'LE', 'LC'];

  const[ Doc , setDoc ] = React.useState();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleChange = event => {
    setDoc(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contacto de Emergencia
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
        <InputLabel htmlFor="TipoD-required">Tipo Doc</InputLabel>
        <Select
          value={Doc}
          onChange={handleChange}
          fullWidth
          inputProps={{
            name: "Doc",
            id: 'TipoD-required',
          }}
        >
        {tDoc.map((label, index) => (
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
