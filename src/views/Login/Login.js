import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { singIn } from '../../store/actions/LoginActions.js';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  grilla:{
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));

const Login = props => {

  const classes = useStyles();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange=(e)=>{
    setState({
      ...state,
      [e.target.id]: e.target.value})
  }
  const enviar=(e)=>{
    props.singIn(state);
  }
  const { authError, auth } = props;
  console.log(auth);
  const links = auth.uid ?
  <Redirect
    exact
    from="/"
    to="/inicio"
  />
  :
    authError ? alert("Usuario y/o contraseña incorrecta."): null ;
    return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.grilla}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Usuario"
              name="email"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              onChange={handleChange}/>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={enviar}>
                Ingresar
              </Button>
              { links }
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvidó su contraseña?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  };

const mapStateToProps= (state) =>{
  return{
    authError: state.login.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    singIn:(creds) => dispatch(singIn(creds))
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Login);
