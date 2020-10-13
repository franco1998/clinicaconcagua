import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import { Link as RouterLink , Redirect } from 'react-router-dom';
import Camas from './components/camas.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function P2(props) {
  const classes = useStyles();
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Segundo Piso </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Camas seccion={"P2"}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Habitaciones 2° Piso</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Camas seccion={"HabP2"}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const mapStateToProps= (state) =>{
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(P2);
