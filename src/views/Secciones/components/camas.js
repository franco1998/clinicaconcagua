import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import DialogContentText from '@material-ui/core/DialogContentText';
import InfoPaciente from './Expandido/Componentes/InfoPaciente.js';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { buscar } from '../../../store/actions/PatientsActions.js';
import '../../../App.css';
import { asignarP } from '../../../store/actions/CamasActions.js';
import { liberarCama } from '../../../store/actions/CamasActions.js';
import {createInternacion} from '../../../store/actions/InternacionActions.js';
import { darAlta } from '../../../store/actions/InternacionActions.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#cacaca",
  },
  test:{
    outline:"1px solid red"
  },
  rootO: {
    flexGrow: 1,
    backgroundColor:"#1ED760",
  },
  bullet: {
    display: 'inline-block',
    margin: '10px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container:{
    width:'95%',
    margin: '0 auto',
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialogo: {
    backgroundColor:'#EFF1F3',
    height:"100%",
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TransitionIP = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
  titulo: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary,
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.titulo} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function Camas(props) {
  const {camas} = props
  var {paciente, internado} = props
  const{internaciones} = props
  const [state, setState] = React.useState({
    existe: null,
    texto:"Por favor, ingrese el documento del paciente",
    doc:'DNI',
    docum:null,
    confirmacion:null,
    noBD:false,
  });
  const [id, setId] = React.useState('');
  const seccion = props.seccion
  const classes = useStyles();
  const [openNP, setOpenNP] = React.useState(false);
  const docu = ['DNI' , 'CI', 'LE', 'LC'];
  const [open, setOpen] = React.useState(false);
  const [camaI, setCamaI ] = React.useState();
  const [openIP, setOpenIP] = React.useState(false);

  const handleClickOpen = (event) => {
    setOpen(true);
    setCamaI(event.target.id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //al abrir un <Dialog/>

  const handleClickOpenNP = (event) => {
    setState({
      existe:false,
      texto: "Por favor, ingrese el documento del paciente",
      docum:false,
      confirmacion: null,
      noBD: false,
    });
    setOpenNP(true);
    setId(event.target.id);
  };

  //al cerrar un <Dialog/>
  const handleCloseNP = () => {
    if(props.paciente!=null){
      props.paciente[0]=null;
    }
    setState({
      existe:false,
      texto: "Por favor, ingrese el documento del paciente",
      docum:false,
      confirmacion: null,
      noBD: false,
    });
    setOpenNP(false);
  };

  //al limpiar el TEXTFIELD documento

  const handleChange = () => {
    setState({
      existe:false,
      texto: "Por favor, ingrese el documento del paciente",
    });

    state.existe = false
    state.texto =  "Por favor, ingrese el documento del paciente"

    if(props.paciente!=null){
      props.paciente[0]=null;
    }
  }

  const handleChangeD = event => {
    state.doc = event.target.value
  }

  //asignar un paciente a la cama

  const asignar = () => {
    camas.map(cama =>{
      if(cama.paciente!=null){
        if(cama.paciente.Documento == paciente[0].Documento) {
          setState({
            existe : true,
            texto:"El paciente ya esta asignado a una cama",
            docum:true,
          })
          state.existe = true
          state.texto=  "El paciente ya esta asignado a una cama"

        }
      }
    })
    if(!state.existe){
        console.log(id)
        props.asignarP(paciente[0], id)
        props.createInternacion(id, paciente[0])
        handleCloseNP()
    }
  }

  //Buscar un paciente

  const buscarP= (e) =>
  {
    if( document.getElementById("documento").value =='' || state.doc==''){
      setState({
        texto:"Debe ingresar un documento sin puntos",
        existe: true,
        docum: true,
      });
    }
    else{
      var dn = document.getElementById("TipoD").value + " " + document.getElementById('documento').value;
      props.buscar(dn);
      if(paciente==null || paciente==''){
        state.confirmacion = "El paciente no se encuentra, desea agregarlo?"
        state.noBD = true
      }
    }
  }

//DAR ALTA

  const darAlta = (event) => {
    props.darAlta(event.target.id);
    props.liberarCama(camaI);
    console.log("id inte ---> " + event.target.id);
    //popover
    handleClose();
  }

//Informacion sobre el Paciente


  const handleClickOpenIP = () => {
    setOpenIP(true);
  };

  const handleCloseIP = () => {
    setOpenIP(false);
  };


  return (
      <Grid container spacing={3}>
        { camas && camas.map(cama =>
          cama.seccion == props.seccion ?
          <Grid item xs={12} sm={6}  md={4} lg={2} >
            {cama.paciente==null ?
            <Card className={classes.root} name={cama.id}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {cama.id}
                </Typography>
                <Typography variant="h5" component="h2">
                  Vacío
                </Typography>
                <Typography className={classes.pos} color="textSecondary">

                </Typography>
                <Typography variant="body2" component="p">

                </Typography>
              </CardContent>
                <CardActions id={cama.id}>
                  <IconButton id={cama.id} aria-label="internar"
                  onClick={handleClickOpenNP}
                  >
                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" id={cama.id}>
                      <path id={cama.id}d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>
                  </IconButton>
                </CardActions>
              </Card>
              :
              <Card className={classes.rootO} name={cama.id}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {cama.id}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {cama.paciente.Nombre}
                  </Typography>
                   {internaciones && internaciones.map(internacion =>
                     internacion.fechaEgreso == null ?
                      internacion.cama == cama.id ?
                      <div>
                        <Typography className={classes.pos} color="textSecondary">
                          Ingreso: {internacion.fechaIngreso.toDate().toLocaleString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {internacion.estudioPendiente} estudios pendientes
                        </Typography>
                      </div>
                      :
                      null
                    :
                    null
                    )}
                </CardContent>
                  <CardActions id={cama.id}>
                    <IconButton id={cama.id} onClick={handleClickOpen}>
                      <span class="MuiIconButton-label" id={cama.id}>
                        <svg class="MuiSvgIcon-root" id={cama.id} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                          <path id={cama.id} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                        </svg>
                      </span>
                    </IconButton>
                  </CardActions>
              </Card>
          }
          </Grid>
          : null
          )}

          <Dialog onClose={handleCloseNP} align="center" aria-labelledby="customized-dialog-title" open={openNP}>
            <DialogTitle id="customized-dialog-title" onClose={handleCloseNP}>
              Asignar un paciente
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}
                  justify="center"
                  alignItems="center">
                <Grid item xs={8} sm={4} >
                  <Select
                    value={state.doc}
                    fullWidth
                    error={state.docum}
                    onChange={handleChangeD}
                    inputProps={{
                      name: "doc",
                      id: 'TipoD',
                    }}
                  >
                  {docu.map((label, index) => (
                      <MenuItem value={label}>{label}</MenuItem>
                  ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={state.existe}
                    id="documento"
                    label="Documento"
                    onChange={handleChange}
                    helperText={state.texto}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <br/>
              { paciente == null || paciente == ''?
                state.noBD ?
                  <div>
                    <Typography gutterBottom error={state.noBD}>
                      El paciente no se encuentra, desea agregarlo?
                    </Typography>
                    <IconButton aria-label="agregar"
                      component={RouterLink}
                      to={"/Nuevo-Pac"}>
                      <CheckIcon />
                    </IconButton>
                    <IconButton aria-label="salir" onClick={handleCloseNP}>
                      <ClearIcon/>
                    </IconButton>
                  </div>
                  :null
                :
                <Typography gutterBottom>
                  Paciente: {paciente[0].Nombre}
                </Typography>
              }
            </DialogContent>
            <DialogActions>
              { paciente == null || paciente == '' ?
                <Button autoFocus onClick={buscarP} color="primary">
                  Buscar
                </Button>
              : <Button autoFocus onClick={asignar} color="primary">
                  Asignar
                </Button>
            }
            </DialogActions>
          </Dialog>

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            {internaciones && internaciones.map(internacion =>
              internacion.fechaEgreso == null ?
               internacion.cama == camaI ?
                  <div  className={classes.dialogo}>
                    <AppBar className={classes.appBar}>
                      <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                          <CloseIcon />
                        </IconButton>
                        <Typography variant="h2" color="inherit" align="center" className={classes.title} onClick={handleClickOpenIP}>
                          {internacion.paciente.Nombre.toUpperCase()}
                        </Typography>
                        <Button autoFocus color="inherit" id={internacion.id} onClick={darAlta}>
                          <span id={internacion.id} class="MuiButton-label">DAR DE ALTA</span>
                        </Button>
                      </Toolbar>
                    </AppBar>
                    <InfoPaciente internacion={internacion}/>

                    <Dialog
                      open={openIP}
                      TransitionComponent={TransitionIP}
                      keepMounted
                      onClose={handleCloseIP}
                      aria-labelledby="alert-dialog-slide-title"
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle id="alert-dialog-slide-title">{internacion.paciente.Nombre}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                          DNI: {internacion.paciente.Documento}
                          <br/>
                          DIRECCION: {internacion.paciente.Direccion}
                          Mas informacion!!!!
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCloseIP} color="primary">
                          Cerrar
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                :null
              : null,
            )}

          </Dialog>
      </Grid>
  );
}



const mapStateToProps = (state) => {
  return{
    camas: state.firestore.ordered.Camas,
    auth: state.firebase.auth,
    paciente: state.paciente.Paciente,
    internaciones:state.firestore.ordered.Internacion,
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{
    buscar:(dni) => dispatch(buscar(dni)),
    asignarP: (paciente, id) => dispatch(asignarP(paciente, id)),
    createInternacion: (cama, paciente) => dispatch(createInternacion(cama,paciente)),
    darAlta:(idInt) => dispatch(darAlta(idInt)),
    liberarCama: (camaI) => dispatch(liberarCama(camaI)),

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'Camas'},
    {collection: 'Internacion'}
  ])
)(Camas);
