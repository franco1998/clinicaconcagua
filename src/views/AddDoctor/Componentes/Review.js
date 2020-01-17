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
  const usuario = props.usuario;
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Usuario:
      </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.title}>
            {usuario.Documento}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {usuario.Profesion}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {usuario.Especialidad}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {usuario.Email}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.title}>
            {usuario.Celular}
          </Grid>
        </Grid>
    </React.Fragment>
  );
}
