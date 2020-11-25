import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { Button } from '@material-ui/core';
import { UsersToolbar, UsersTable } from './components';
import { Link as RouterLink , Redirect } from 'react-router-dom';
import { buscar } from '../../store/actions/PatientsActions.js';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));
const PatientList = props => {
  const classes = useStyles();
  const { open, ...rest } = props;

  const { pacientes, auth, encontrado } = props;

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
        {console.log("====>" + encontrado)}
      </div>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          component={RouterLink}
          to={"/Nuevo-Pac"}
        >
          Añadir Paciente
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    pacientes: state.firestore.ordered.Paciente,
    auth: state.firebase.auth,
    encontrado: state.paciente.Paciente,
  }
}

const n= "23123";

const mapDispatchToProps = (dispatch) =>{
  return{
  buscar: dispatch(buscar(n)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'Paciente'}
  ])
)(PatientList);
