import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UsersTable = props => {
  const { className, users, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>DNI</TableCell>
                  <TableCell>Apellido y Nombre</TableCell>
                  <TableCell>Direccion</TableCell>
                  <TableCell>Obra Social </TableCell>
                  <TableCell> OP</TableCell>
                  <TableCell> Contacto de Emergencia </TableCell>
                  <TableCell> Telefono del contacto </TableCell>
                  <TableCell> Vinculo </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users && users.map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}
                  >
                  <TableCell>{user.Documento}</TableCell>
                    <TableCell>
                        <Typography variant="body1">{user.Nombre}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="body1">{user.Direccion}</Typography>
                    </TableCell>
                    <TableCell>
                      { user.Osocial}
                    </TableCell>
                    <TableCell>{
                      user.op ? <CheckIcon/> : "X"
                    }</TableCell>
                    <TableCell>
                      {user.NombreE}
                    </TableCell>
                    <TableCell> {user.TelefonoE}</TableCell>
                    <TableCell> {user.Vinculo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={4}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      </CardActions>
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;
