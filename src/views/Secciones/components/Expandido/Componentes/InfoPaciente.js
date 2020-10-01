import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tab from './Tab.js';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { buscarI } from '../../../../../store/actions/InternacionActions.js';

const useStyles = makeStyles({
  card: {
    minWidth: 'auto',
    height: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const InfoPaciente = props => {
  const classes = useStyles();

  const { internacion } = props;

  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
      {internacion === null ?
      null
      :
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">

            {internacion.Idpaciente.Nombre}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {internacion.Idpaciente.Documento}
              <br/>
              Edad: {internacion.Idpaciente.fechaNacimiento}
              <br/>
              Fecha de Ingreso: 
            </Typography>
            <Typography variant="body2" component="p">
              Contacto de emergencia:{internacion.Idpaciente.NombreE}
              <br/>
              {internacion.Idpaciente.Vinculo}
              <br/>
              {internacion.Idpaciente.TelefonoE}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Dar de Alta</Button>
          </CardActions>
          <CardActions>
            <Button size="small">Cambiar de cama</Button>
          </CardActions><CardActions>
            <Button size="small">Ver Informe</Button>
          </CardActions>
        </Card>
      }
      </Grid>
      <Grid item xs={12} sm={9}>
        <Tab/>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return{
    internacion: state.internacion.Internacion,
  }
}


const mapDispatchToProps = (dispatch, props) =>{
  return{
  buscarI: dispatch(buscarI(props.info.cama)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'Internacion'}
  ])
)(InfoPaciente);
