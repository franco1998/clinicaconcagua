import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Tabs2 from './Componentes/Tabs2.js';

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

const Expande = (props) => {
  const classes = useStyles();
  const {indice} = props.location.state;

  return (
    <div className={classes.root}>
      <Tabs2 indice={indice}/>
    </div>
  );
};

export default Expande;
