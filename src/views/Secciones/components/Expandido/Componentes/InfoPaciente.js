import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,
         CardHeader,
         CardActions,
         CardContent,
         Button,
         Typography,
         Paper,
         Grid,
         Divider,
         Accordion,
         AccordionDetails,
         AccordionSummary,
         TextField,
         Select,
         MenuItem} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {NuevoDiag} from '../../../../../store/actions/DiagnosticoActions.js';
import {extraer} from '../../../../../store/actions/DiagnosticoActions.js';
import {cambiarAlim} from '../../../../../store/actions/InternacionActions.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const useStyles = makeStyles( theme =>({
  root: {
    minWidth: 275,
    margin: '20px',
    padding: 0,
    width:'100%',
  },
  container: {
    padding: theme.spacing(4),
    backgroundColor:'#EFF1F3',
    height:'100%',
  },
  paper: {
    height: "100px",
    marginTop:"10px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  diag: {
    width:'100%',
    margin: '20px',
  },
  alim: {
    width:'100%',
    margin: '20px',
  },
  actions: {
    justifyContent: 'flex-end'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginRight: '10px',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function InfoPaciente(props) {
  const classes = useStyles();
  const { internacion, diagnosticos} = props;
  var diagnosticosI = [];
  const [expanded, setExpanded] = React.useState(false);
  const [state, setState ] = React.useState({
    detalle:false,
    textoDetalle:'',
    alim:'Solidos',
  })

  const comidas = ['Solidos' , 'Blandos'];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const cambiar = () =>{
    if(document.getElementById("detalle").value!=null){
      props.NuevoDiag(internacion.id, document.getElementById("detalle").value);
    }
  }

  const filtrar = () =>{
    if(diagnosticos != null){
      diagnosticos.map(diagnostico =>
      diagnostico.internacion== internacion.id?
      diagnosticosI.push(diagnostico)
    :
    null
  )
    }
  }

  const CambiarAl = () =>{
    props.cambiarAlim(internacion.id, state.alim);
  }

  const handleChangeD = event => {
    state.alim = event.target.value
  }

  return (
    <div className={classes.container}>
    {props.extraer(internacion.id)}
           <Grid container spacing={4}>
              <Grid item lg={8} md={12} xl={9} xs={12}>
              <Card
                >
                  <CardHeader
                    title="Diagnostico"
                  />
                  <Divider />
                  <CardContent>
                  { filtrar(),
                    diagnosticosI ==  '' ?
                    <Typography>
                      Aun no se ha establecido un diagnostico.
                    </Typography>
                    :
                    diagnosticosI.map(diagnostico =>
                    <Typography>
                      {diagnostico.fecha.toDate().toLocaleString()}     {diagnostico.detalle}
                    </Typography>
                  )
                }
                  </CardContent>
                  <TextField
                    error={state.detalle}
                    id="detalle"
                    label="Detalle"
                    helperText={state.textoDetalle}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <CardActions className={classes.actions}>
                    <Button
                      color="primary"
                      size="small"
                      variant="text"
                      onClick={cambiar}
                    >
                      Cambiar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <Card>
                  <CardHeader
                    title="Alimentacion"
                  />
                  <Divider />
                  <CardContent>
                    { internacion.alimentacion == null ?
                      <Typography>
                        Aun no se ha establecido un regimen alimenticio.
                      </Typography>
                    :
                    <Typography>
                     {internacion.alimentacion.detalle}
                    </Typography>
                  }
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Select
                      value={state.alim}
                      fullWidth
                      error={state.alimen}
                      onChange={handleChangeD}
                      inputProps={{
                        name: "alim",
                        id: 'Alimentacion',
                      }}
                    >
                    {comidas.map((label, index) => (
                        <MenuItem value={label}>{label}</MenuItem>
                    ))}
                    </Select>
                    <Button
                      color="primary"
                      size="small"
                      variant="text"
                      onClick={CambiarAl}
                    >
                      Cambiar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}> Estudios</Typography>
                    <Typography className={classes.secondaryHeading}>0 pendiente/s</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Info estudios.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}> Interconsultas</Typography>
                    <Typography className={classes.secondaryHeading}>0 pendiente/s</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Info interconsultas.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    diagnosticos: state.diagnostico.Diagnosticos,
  }
}

const mapDispatchToProps= (dispatch) =>{
  return{
    NuevoDiag:(idInt, detalle) => dispatch(NuevoDiag(idInt, detalle)),
    extraer:(idInt) => dispatch(extraer(idInt)),
    cambiarAlim:(idInt, detalle) => dispatch(cambiarAlim(idInt, detalle))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'Diagnostico'},
  ])
)(InfoPaciente);
