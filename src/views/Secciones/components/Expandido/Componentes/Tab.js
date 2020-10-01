import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Estudios from './Estudio/Estudios.js';
import Interconsultas from './Interconsulta/Interconsultas.js';
import Revision from './Revision/Revision.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    backgroundColor: theme.palette.secondary.light,
    color: 'black'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example" className={classes.tab}>
          <Tab label="Diagnostico actual" {...a11yProps(0)} />
          <Tab label="Estudios" {...a11yProps(1)} />
          <Tab label="Interconsultas" {...a11yProps(2)} />
          <Tab label="Enfermería" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Revision/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Estudios/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Interconsultas/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Enfermeria
      </TabPanel>
    </div>
  );
}
