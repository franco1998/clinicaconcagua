import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { SearchInput } from '../../../../Components';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Buscar paciente"
        />
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
