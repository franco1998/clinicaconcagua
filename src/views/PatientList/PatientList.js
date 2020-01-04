import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { UsersToolbar, UsersTable } from './components';
import { Link as RouterLink , Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));
const PatientList = props => {
  const classes = useStyles();

  const { pacientes, auth } = props;

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
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={pacientes}/>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return{
    pacientes: state.firestore.ordered.Paciente,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'Paciente'}
  ])
)(PatientList);
