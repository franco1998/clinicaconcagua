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
  let paciente = props.paciente;
  let emergencia = props.emergencia;
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Paciente:
      </Typography>
        <Grid container>
        {paciente.map((label) => (
          <Grid item xs={12} sm={6} key={label}  className={classes.title}>
            {label}
          </Grid>
        ))}
        </Grid>
      <Typography variant="h4" gutterBottom>
        Contacto de Emergencia:
      </Typography>
      <Grid container >
        {emergencia.map((value) => (
          <Grid item xs={12} sm={6} key={value} className={classes.title}>
            {value}
          </Grid>
        ))}
        </Grid>

    </React.Fragment>
  );
}
