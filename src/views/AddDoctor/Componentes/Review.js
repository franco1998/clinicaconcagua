import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
    fontSize: '16px',
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const paciente = props.paciente;
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Paciente:
      </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.Nombre}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.Documento}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.FdeNacimiento}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.Direccion}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.Osocial}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.op}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.Nafiliado}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.ART}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {paciente.Nsiniestro}
          </Grid>
        </Grid>
        <Typography variant="h4" gutterBottom>
          Contacto de Emergencia:
        </Typography>
        <Grid container>
        <Grid item xs={12} sm={6} className={classes.title}>
          {paciente.NombreE}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.title}>
          {paciente.DocumentoE}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.title}>
          {paciente.FdeNacimientoE}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.title}>
          {paciente.Vinculo}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.title}>
          {paciente.TelefonoE}
        </Grid>
        </Grid>
    </React.Fragment>
  );
}
