import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
  },
  details: {
    display: 'flex'
  },
  }));

function Revision (props) {
  const classes = useStyles();

  return(
    <Grid container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
      cell= '2'
    >
      <Grid item xs={6} sm={3}>
        ULTIMAS REVISIONES Y DIAGNOSTICOS...
        <Grid item xs={6} sm={3}>
          NUTRICION...
        </Grid>
        <Grid item xs={6} sm={3}>
          SIGNOS VITALES...
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Revision;
