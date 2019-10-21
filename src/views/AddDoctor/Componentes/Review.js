import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const paciente = [
  { name: 'Paciente', desc: 'A nice thing'},
  { name: 'DNI', desc: 'Something else'},
  { name: 'Direccion', desc: 'Best thing of all'},
  { name: 'Fecha de Nacimiento', desc:''},
  { name: 'Obra Social', desc: '', price: 'Free' },
  { name: 'N° Afiliado', },
  { name: 'ART',},
  { name: 'N° Siniestro',},
];
const emergencia = [
  { name: 'Familiar', detail: 'Visa' },
  { name: 'DNI', detail: 'Mr John Smith' },
  { name: 'Fecha de Nacimiento', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Vinculo', detail: '04/2024' },
  { name: 'Telefono',},
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Paciente
      </Typography>
      <List disablePadding>
        {paciente.map(paciente => (
          <ListItem className={classes.listItem} key={paciente.name}>
            <ListItemText primary={paciente.name} secondary={paciente.desc} />
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom></Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {emergencia.map(emergencia => (
              <React.Fragment key={emergencia.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{emergencia.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{emergencia.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
