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
import Review from './Componentes/Review.js';
import Snackbar from'./Componentes/Snackbar.js';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/LoginActions';

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

const steps = ['Nuevo usuario', 'Revisión'];

const personal = {
  Nombre:'',
  Documento: '',
  Email:'',
  Profesion: '',
  password: '',
  Nombre:'',
  Celular:'',
  Especialidad:'',
}

const form = React.createRef();

function getStepContent(step,props) {
  switch (step) {
    case 0:
      return <DatosForm personal={personal} ref={form}/>;
    case 1:
      return <Review usuario={personal}/>;
    default:
      throw new Error('Unknown step');
  }
}

function NuevoPersonal(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep !== 2 && form.current.agregar()){
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () =>{
      props.signUp(personal);
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
            Nuevo profesional
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Redirect
                  exact
                  from="/"
                  to="/personal"
                />
                  <Snackbar variant={'success'} mensaje={"Fue agregado con exito"}/>
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
                    to={"/personal"}
                  >
                  Cancelar
                  </Button>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
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
                        to={"/personal"}
                      >
                      Finalizar
                      </Button>
                     : <Button
                       variant="contained"
                       color="primary"
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
    signUp: (personal) => dispatch(signUp(personal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevoPersonal);
