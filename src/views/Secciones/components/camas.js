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
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { buscar } from '../../../store/actions/PatientsActions.js';
import '../../../App.css';
import { asignarP } from '../../../store/actions/CamasActions.js';
import {createInternacion} from '../../../store/actions/InternacionActions.js';

const useStyles = makeStyles({
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
  var {paciente, internaciones} = props
  const [state, setState] = React.useState({
    existe: null,
    texto:"Por favor, ingrese el documento del paciente",
    doc:'',
  });
  const [id, setId] = React.useState('');
  const seccion = props.seccion
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const docu = ['DNI' , 'CI', 'LE', 'LC'];

  //al abrir un <Dialog/>

  const handleClickOpen = (event) => {
    setState({
      existe:false,
      texto: "Por favor, ingrese el documento del paciente",
    });
    setOpen(true);
    setId(event.target.id);
    console.log(id);
  };

  //al cerrar un <Dialog/>
  const handleClose = () => {
    if(props.paciente!=null){
      props.paciente[0]=null;
    }
    setOpen(false);
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
    console.log("asignar " + id)
    camas.map(cama =>{
      if(cama.paciente!=null){
        if(cama.paciente.Documento == paciente[0].Documento) {
          setState({
            existe : true,
            texto:"El paciente ya esta asignado a una cama",
          })
          state.existe = true
          state.texto=  "El paciente ya esta asignado a una cama"

        }
      }
    })
    console.log("antes del if " + id)
    if(!state.existe){
        console.log(id)
        props.asignarP(paciente[0], id, seccion)
        props.createInternacion(id, paciente[0])
        handleClose()
    }
  }

  //Buscar un paciente

  const buscarP= (e) =>
  {
    if(document.getElementById("documento").value ==''){
      setState({
        texto:"Debe ingresar un documento sin puntos",
        existe: true,
      });
    }
    else{
      props.buscar(document.getElementById("documento").value);
      console.log(id)
    }
  }

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
                  onClick={handleClickOpen}
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
                    )}
                </CardContent>
                  <CardActions>
                    <IconButton aria-label="infoP">
                      <InfoIcon/>
                    </IconButton>
                  </CardActions>
              </Card>
          }
          </Grid>
          : null
          )}

          <Dialog onClose={handleClose} align="center" aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Asignar un paciente
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3} direction="row"
                  justify="center"
                  alignItems="center">
                <Grid item xs={8} sm={4} >
                  <Select
                    value={state.doc}
                    fullWidth
                    label="Tipo Doc"
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

              { paciente == null || paciente == ''?
                <Typography gutterBottom error={state.existe}>
                </Typography>
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
    asignarP: (paciente, id, seccion) => dispatch(asignarP(paciente, id, seccion)),
    createInternacion: (cama, paciente) => dispatch(createInternacion(cama,paciente)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'Camas'},
    {collection: 'Internacion'}
  ])
)(Camas);
