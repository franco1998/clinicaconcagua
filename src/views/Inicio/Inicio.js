import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // boton: {
  //   margin
  // }
}));

const Inicio = props=>{

  const classes = useStyles();

  return(
    <Button className={classes.boton}
    type="button"
    variant="contained"
    color="primary"
    className={classes.submit}>
     Empezar
    </Button>
  );
}
export default Inicio;
