import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function InfoPaciente(props) {
  const classes = useStyles();
  const { internacion } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
        
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
