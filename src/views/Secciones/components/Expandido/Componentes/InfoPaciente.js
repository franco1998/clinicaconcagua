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
         AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

export default function InfoPaciente(props) {
  const classes = useStyles();
  const { internacion } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.container}>
           <Grid container spacing={4}>
              <Grid item lg={8} md={12} xl={9} xs={12}>
              <Card
                >
                  <CardHeader
                    title="Diagnostico"
                  />
                  <Divider />
                  <CardContent>
                    <Typography>
                      Bla Bla
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button
                      color="primary"
                      size="small"
                      variant="text"
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
                    <Typography>
                      bla bla
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button
                      color="primary"
                      size="small"
                      variant="text"
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
