import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  UCE_E,
  UTI_E,
  UCO_E,
  H1_6,
} from '../../Expandido';
import Toolbar from './Toolbar.js';
import Construcion from '../../../../../img/construccion.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: '0 auto',
    alignItems:'center',
    justifyContent: 'center',
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(props.indice);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="full width tabs example"
        >
          <Tab label="UTI" {...a11yProps(0)} />
          <Tab label="Hab 1 / Hab 6" {...a11yProps(1)} />
          <Tab label="UCE" {...a11yProps(2)} />
          <Tab label="UCO" {...a11yProps(3)} />
          <Tab label="Piso 1" {...a11yProps(4)} />
          <Tab label="Buffet" {...a11yProps(5)} />
          <Tab label="Hab 210" {...a11yProps(6)} />
          <Tab label="Piso 2" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className={classes.root2}>
          <Toolbar />
          <div className={classes.content}>
            <UTI_E/>
          </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.root2}>
            <Toolbar />
            <div className={classes.content}>
              <H1_6/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className={classes.root2}>
            <Toolbar />
            <div className={classes.content}>
              <UCE_E/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div className={classes.root2}>
            <Toolbar />
            <div className={classes.content}>
              <UCO_E/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <div className={classes.root2}>
            <Toolbar />
            <div className={classes.content}>
              <img src={Construcion}/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <div className={classes.root2}>
            <Toolbar />
            <div className={classes.content}>
              <img src={Construcion}/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <div className={classes.root2}>
            <Toolbar />
            <div className={classes.content}>
              <img src={Construcion}/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          <div className={classes.root2}>
            <Toolbar />
            <div className={classes.content}>
              <img src={Construcion}/>
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
