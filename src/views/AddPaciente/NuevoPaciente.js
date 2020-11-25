import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DatosForm from './Componentes/DatosForm.js';
import FamForm from './Componentes/FamiliarForm.js';
import Review from './Componentes/Review.js';
import Snackbar from'./Componentes/Snackbar.js';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPatients } from '../../store/actions/PatientsActions';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Paciente', 'Contacto de Emergencia', 'Revisión'];

const paciente = {
  Nombre: '',
  Documento: '',
  FdeNacimiento: '',
  Direccion:'',
  Osocial:'',
  op:'',
  Nafiliado:'',
  ART:'',
  Nsiniestro:'',
  NombreE:'',
  DocumentoE:'',
  FdeNacimientoE:'',
  Vinculo:'',
  TelefonoE:'',
  siguiente:null,
}


function getStepContent(step,props) {
  switch (step) {
    case 0:
      return <DatosForm paciente={paciente} />;
    case 1:
      return <FamForm paciente={paciente}/>;
    case 2:
      return <Review paciente={paciente}/>;
    default:
      throw new Error('Unknown step');
  }
}


function NuevoPaciente(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {

    if(activeStep !== 2 && paciente.siguiente){
          setActiveStep(activeStep + 1);
          paciente.siguiente = false
    }else{
      paciente.siguiente = true
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () =>{
      props.createPatients(paciente)
  }

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
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Nuevo paciente
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {  steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Snackbar variant={'success'} mensaje={"El paciente fue agregado con exito"}/>
                </React.Fragment>
            ) : (
              <React.Fragment>

                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  component={RouterLink}
                  to={"/pacientes"}
                >
                Cancelar
                </Button>
                  {activeStep !== 0 && (
                    <Button
                    onClick={handleBack}
                    variant="contained"
                    color="primary"
                    className={classes.button}>
                      Atras
                    </Button>
                  )}
                    {activeStep === steps.length - 1 ?
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className={classes.button}
                        component={RouterLink}
                        to={"/pacientes"}
                      >
                      Finalizar
                      </Button>
                     : !paciente.siguiente ?
                      <Button
                        variant="contained"
                        color="primary"
                        disabled
                        onClick={handleNext}
                        className={classes.button}
                      >
                      Siguiente
                      </Button>:
                      <Button
                         variant="contained"
                         color="primary"
                         disabled
                         onClick={handleNext}
                         className={classes.button}
                       >
                       Siguiente
                       </Button>}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

const mapStateToProps= (state) =>{
  return{
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    createPatients: (paciente) => dispatch(createPatients(paciente))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevoPaciente);
