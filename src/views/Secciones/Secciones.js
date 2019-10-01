import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Stepper from './components/stepper.js';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  }
}));

const Secciones = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper/>
    </div>
  );
};

export default Secciones;
