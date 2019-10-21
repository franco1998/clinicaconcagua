import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../img/logo.jpg';

const useStyles = makeStyles(theme => ({
  imagen: {
    height: '500px',
    width:'100%',
  },
}));

const Inicio = props=>{

  const classes = useStyles();

  return(
    <img src={Img} className={classes.imagen}/>
  );
}
export default Inicio;
