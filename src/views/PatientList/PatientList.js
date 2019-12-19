import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { UsersToolbar, UsersTable } from './components';

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

  const { pacientes } = props;

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
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'Paciente'}
  ])
)(PatientList);
