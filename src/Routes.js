import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './Components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  PatientList as PatientListView,
  UserList as UserListView,
  AddPaciente as AddPacienteView,
  PlantaBaja as PlantaBajaView,
  P1 as P1View,
  P2 as P2View,
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView,
  Inicio as Inicioview,
  Login as LoginView,
  AddDoctor as AddDoctorView,
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
        to="/Login"
      />
      <RouteWithLayout
        component={LoginView}
        exact
        layout={MinimalLayout}
        path="/Login"
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
        path="/personal"
      />
      <RouteWithLayout
        component={PatientListView}
        exact
        layout={MainLayout}
        path="/pacientes"
      />
      <RouteWithLayout
        component={PlantaBajaView}
        exact
        layout={MainLayout}
        path="/Planta-Baja"
      />
      <RouteWithLayout
        component={P1View}
        exact
        layout={MainLayout}
        path="/P1"
      />
      <RouteWithLayout
        component={P2View}
        exact
        layout={MainLayout}
        path="/P2"
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
        component={AddPacienteView}
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
      <RouteWithLayout
        component={AddDoctorView}
        exact
        layout={MainLayout}
        path="/nuevoProfesional"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
