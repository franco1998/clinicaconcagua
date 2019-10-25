import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './Components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  PatientList as PatientListView,
  UserList as UserListView,
  AddDoctor as AddDoctorView,
  Secciones as SeccionesView,
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView,
  Inicio as Inicioview
} from './views';

import {
  Expande as ExpandeView
} from './views/Secciones/components/Expandido';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/Inicio"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/doctores"
      />
      <RouteWithLayout
        component={PatientListView}
        exact
        layout={MainLayout}
        path="/pacientes"
      />
      <RouteWithLayout
        component={SeccionesView}
        exact
        layout={MainLayout}
        path="/secciones"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={ExpandeView}
        exact
        layout={MainLayout}
        path="/SeccionesE"
      />
      <RouteWithLayout
        component={AddDoctorView}
        exact
        layout={MainLayout}
        path="/Nuevo-Pac"
      />
      <RouteWithLayout
        component={Inicioview}
        exact
        layout={MainLayout}
        path="/Inicio"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
