import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = (props) => {
  const classes = useStyles();

  const { personal, auth } = props;

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
        <UsersTable users={personal} />
      </div>
    </div>
  );
};

const mapStateToProps= (state) =>{
  return{
    personal: state.firestore.ordered.Profesional,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'Profesional'}
  ])
)(UserList);
