import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

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

  const [users] = useState(mockData);
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
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

const mapStateToProps= (state) =>{
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(UserList);
