import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  contenedor: {
    alignItems:'center',
  },
  texto: {
    marginTop: '20px'
  }
  }));

export default function NoPaciente (props) {
  const classes = useStyles();
  return(
    <Grid container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
      cell= '3'
    >
      <Grid item xs={12} className={classes.texto}>
        <Typography variant="h3">
          No hay ningun paciente asignado.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="documento"
          name="documento"
          label="Tipo y n° de documento"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Buscar paciente
        </Button>
      </Grid>
    </Grid>
  );
}
