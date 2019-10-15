import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Pb from './PB.js';
import P1 from './P1.js';
import P2 from './P2.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: '0 auto',
  },
  button: {
    height:'600px',
    width:'4em',
    [theme.breakpoints.down('sm')]: {
      display:"none",
    },
  },
  left:{
    [theme.breakpoints.down('sm')]: {
      display:"none",
    },
  },
  rigth:{
    [theme.breakpoints.down('sm')]: {
      display:"none",
    },
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  tam:{
    width: '100%',
    margin: '0 auto'
  },
  item: {
    textAlign:'center',
    margin:"0 auto",
    display:'block',
    width:"100%",
  },
}));

function getSteps() {
  return ['PB', 'P1', 'P2'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Pb/>;
    case 1:
      return <P1/>;
    case 2:
      return <P2/>;
  }
}

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ?
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const isFirstStep = () =>{
    return activeStep === 0;
  }

  const handleBack = () => {
    const newActiveStep =
    isFirstStep() ? activeStep + 2 : activeStep - 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tam}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
      </div>
      <div>
        <Grid container item xs={12} spacing={3} className={classes.grilla}>
           <Grid item xs={1} className={classes.left}>
                  <Button className={classes.button} onClick={handleBack}><ChevronLeftIcon/></Button>
            </Grid>
            <Grid item xs={10} className={classes.item} >
                <Fade>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                </Fade>
                  
            </Grid>
            <Grid item xs={1} className={classes.rigth} >
                  <Button className={classes.button} onClick={handleNext}><ChevronRightIcon/></Button>
            </Grid>
        </Grid>
        </div>
    </div>
  );
}
