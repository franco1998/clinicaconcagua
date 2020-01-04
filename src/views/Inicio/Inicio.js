import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../img/logo.jpg';
import { Link as RouterLink , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  imagen: {
    height: '500px',
    width:'100%',
  },
}));

const Inicio = props=>{

  const classes = useStyles();
  const { auth } = props;

  if (!auth.uid) {
    return(
      <Redirect
        exact
        from="/"
        to="/Login"
      />
    );
  }

  return(
    <img src={Img} className={classes.imagen}/>
  );
}

const mapStateToProps= (state) =>{
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Inicio);
