import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';
import { connect } from 'react-redux';
import {signOut} from '../../../../store/actions/LoginActions.js';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title:'Inicio',
      href:'/inicio',
      icon:<HomeIcon/>
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
  ];
    const pagesS = [{
      title: 'Planta Baja',
      href: '/Planta-Baja',
      icon: <LockOpenIcon />
    },
    {
      title: 'Primer Piso',
      href: '/P1',
      icon: <LockOpenIcon />
    },
    {
      title: 'Segundo Piso',
      href: '/P2',
      icon: <LockOpenIcon />
    },
  ];
    const pagesPersonas = [
      {
      title: 'Personal de la clinica',
      href: '/personal',
      icon: <PeopleIcon />
    },
    {
      title: 'Pacientes',
      href: '/pacientes',
      icon: <PeopleIcon />
    },
    {
      title: 'Mi perfil',
      href: '/account',
      icon: <AccountBoxIcon />
    },
  ];

  const pages2 =[
    {
      title:'Cerrar Sesion',
      href:'/Login',
      icon:<HomeIcon/>
    },
  ];
  const handleclickeado = (event) =>{
    event.preventDefault();
  }
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
          onClick={handleclickeado}
        />
        Secciones
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pagesS}
          onClick={handleclickeado}
        />
        <SidebarNav
          className={classes.nav}
          pages={pagesPersonas}
          onClick={handleclickeado}
        />
        <SidebarNav
          className={classes.nav}
          pages={pages2}
          onClick={props.signOut}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) =>{
  return{
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(Sidebar);
