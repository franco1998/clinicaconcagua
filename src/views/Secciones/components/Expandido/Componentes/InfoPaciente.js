import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tab from './Tab.js';
import Grid from '@material-ui/core/Grid';

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

export default function InfoPaciente() {
  const classes = useStyles();
  const paciente = {
    nombre: "Hernesto De La Cruz",
    documento: "4.123.657",
    edad: "56",
    contEmerg:"Hija, 2657-453423",
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {paciente.nombre}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Documento: {paciente.documento}
              <br/>
              Edad: {paciente.edad}
            </Typography>
            <Typography variant="body2" component="p">
              Contacto de emergencia:<br/>
              {paciente.contEmerg}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Dar de Alta</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Tab/>
      </Grid>
    </Grid>
  );
}
