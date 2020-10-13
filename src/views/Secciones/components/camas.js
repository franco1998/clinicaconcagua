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

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor:"#cacaca",
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
  }
});

function Camas(props) {
  const {camas} = props
  const seccion = props.seccion
  const classes = useStyles();

  return (
      <Grid container spacing={3}>
        { camas && camas.map(cama =>
          cama.seccion == props.seccion ?
          <Grid item xs={12} sm={6}  md={4} lg={2} >
            <Card className={classes.root} id={camas.id}>
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
              {
                cama.paciente == null ?
                <CardActions>
                  <IconButton aria-label="internar">
                    <PersonAddIcon/>
                  </IconButton>
                </CardActions>
                :
                <CardActions>
                  <IconButton aria-label="infoP">
                    <InfoIcon/>
                  </IconButton>
                </CardActions>
              }
            </Card>
          </Grid>
          : null
          )}
      </Grid>
  );
}
const mapStateToProps = (state) => {
  return{
    camas: state.firestore.ordered.Camas,
    auth: state.firebase.auth,
  }
}

// const n= "23123";
//
// const mapDispatchToProps = (dispatch) =>{
//   return{
//   buscar: dispatch(buscar(n)),
//   }
// }

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'Camas'}
  ])
)(Camas);
