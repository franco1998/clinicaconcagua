import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  paper2: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Revision() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper1} elevation={3}>Ultimas Revisiones y diagnosticos</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper2} elevation={3}>Nutricion</Paper>
          <Paper className={classes.paper2} elevation={3}>Signos vitales</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Revision;
