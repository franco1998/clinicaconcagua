import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

export default function AddressForm() {

  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
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
        <InputLabel htmlFor="age-required">Tipo Doc</InputLabel>
        <Select
          value={values.TDoc}
          onChange={handleChange}
          name="TipoDoc"
          fullWidth
          inputProps={{
            id: 'TipoD-required',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"DNI"}>DNI</MenuItem>
          <MenuItem value={"CI"}>CI</MenuItem>
          <MenuItem value={"LE"}>LE</MenuItem
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
          <TextField id="state" name="state" label="Provincia" fullWidth />
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
            id="Tel2"
            name="Tel2"
            label="Telefono 2"
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
