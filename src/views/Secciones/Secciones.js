import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Tabs from './components/Tabs.js';
import { Link as RouterLink , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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

const Secciones = (props) => {
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
  return (
    <div className={classes.root}>
      <Tabs/>
    </div>
  );
};

const mapStateToProps= (state) =>{
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Secciones);
