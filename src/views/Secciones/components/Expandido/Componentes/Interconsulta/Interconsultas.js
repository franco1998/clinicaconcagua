import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Interconsultas() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Neurología" {...a11yProps(0)} />
        <Tab label="Cirugía" {...a11yProps(1)} />
        <Tab label="Cardiología" {...a11yProps(2)} />
        <Tab label="Traumatología" {...a11yProps(3)} />
        <Tab label="Oncología" {...a11yProps(4)} />
        <Tab label="Ginecología" {...a11yProps(5)} />
        <Tab label="Kinesiología" {...a11yProps(6)} />
        <Tab label="Urología" {...a11yProps(7)} />
        <Tab label="Dermatología" {...a11yProps(8)} />
        <Tab label="Nefrología" {...a11yProps(9)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Neurología
      </TabPanel>
      <TabPanel value={value} index={1}>
        Cirugía
      </TabPanel>
      <TabPanel value={value} index={2}>
        Cardiología
      </TabPanel>
      <TabPanel value={value} index={3}>
        Traumatología
      </TabPanel>
      <TabPanel value={value} index={4}>
        Oncología
      </TabPanel>
      <TabPanel value={value} index={5}>
        Ginecología
      </TabPanel>
      <TabPanel value={value} index={6}>
        Kinesiología
      </TabPanel>
      <TabPanel value={value} index={7}>
        Urología
      </TabPanel>
      <TabPanel value={value} index={8}>
        Dermatología
      </TabPanel>
      <TabPanel value={value} index={9}>
        Nefrología
      </TabPanel>
    </div>
  );
}
