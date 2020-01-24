import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Card,
  CardContent,
} from '@material-ui/core';
import { buscar } from '../../../../../store/actions/PatientsActions.js';
import { asignar } from '../../../../../store/actions/InternacionActions.js';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  contenedor: {
    alignItems:'center',
  },
  texto: {
    marginTop: '20px'
  },
  details: {
    display: 'flex'
  },
  }));

function NoPaciente (props) {
  const classes = useStyles();

  const { paciente, info } = props;

  const buscarP= (e) =>
  {
    console.log("paciente", paciente)
    props.buscar(document.getElementById("documento").value);
  }

  const asignarP=(e)=>{
    console.log(info);
    props.asignar(info, paciente[0]);
  }

  return(
    <Grid container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
      cell= '3'
    >
      <Grid item xs={12} className={classes.texto}>
        <Typography variant="h3">
          No hay ningun paciente asignado.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="documento"
          name="documento"
          label="Tipo y n° de documento"
          fullWidth
        />
      </Grid>
      {
        paciente == null ?
        null
        :
        <Card>
          <CardContent>
            <div className={classes.details}>
              <div>
                <Typography
                  gutterBottom
                  variant="h2"
                >
                  {paciente[0].Nombre}
                </Typography>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="body1"
                >
                  {paciente[0].Documento}
                </Typography>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="body1"
                >
                  {paciente[0].Osocial}. {paciente[0].Nafiliado}
                </Typography>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="body1"
                >
                  {paciente[0].ART}, {paciente[0].Nsiniestro}
                  {console.log("-", paciente)}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      }
      {
        paciente==null?
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={buscarP}
          >
            Buscar paciente
          </Button>
        </Grid>
          :
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={asignarP}
            >
              Asignar paciente.
            </Button>
          </Grid>
      }{
        console.log("--", paciente)
      }
    </Grid>
  );
}

const mapStateToProps= (state) =>{
  console.log("..", state.paciente.Paciente);
  return{
    paciente: state.paciente.Paciente,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    buscar:(dni) => dispatch(buscar(dni)),
    asignar: (info, paciente) => dispatch(asignar(info, paciente))
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(NoPaciente);
