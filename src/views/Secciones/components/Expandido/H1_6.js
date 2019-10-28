import React from 'react';
import '../../../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import TabV from './Componentes/TabV.js';

const useStyles = makeStyles( theme =>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 0.5,
  },
}));

export default function H1_6 (props){
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
    cama:'',
  });

  const toggleDrawer = (side, open, c) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({
      [side]: open,
      cama: c,
    });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return(
    <div>
    <svg version="1.1"
        viewBox="0 0 700 700" {...props} className="hab">
    <g id="H1-6_1_">
      <g id="H1-6">
        <g id="XMLID_5_">
          <g>
            <polygon className="H1-6" points="246,8 246,272 54.2,272 54.2,8.1 54.2,8 				"/>
          </g>
          <g>
            <line className="H1-6" x1="54.2" y1="8.1" x2="54.2" y2="272"/>
            <line className="H1-6" x1="246" y1="272" x2="246" y2="8"/>
            <line className="H1-6" x1="246" y1="8" x2="54.2" y2="8"/>
            <line className="H1-6" x1="54.2" y1="272" x2="246" y2="272"/>
          </g>
        </g>
      </g>
    </g>
    <path id="AH1" onClick={toggleDrawer('bottom', true, "cama A HAB 1")} className="CH1-6" d="M94.5,35.5h-20c-3.8,0-7-3.1-7-7l0,0c0-3.8,3.1-7,7-7h20c3.8,0,7,3.1,7,7l0,0
      C101.5,32.4,98.4,35.5,94.5,35.5z"/>
    <path id="BH1" onClick={toggleDrawer('bottom', true, "cama B HAB 1")} className="CH1-6" d="M94.5,167.5h-20c-3.8,0-7-3.1-7-7l0,0c0-3.9,3.1-7,7-7h20c3.8,0,7,3.1,7,7l0,0
      C101.5,164.4,98.4,167.5,94.5,167.5z"/>
    <path id="AH2" onClick={toggleDrawer('bottom', true, "cama A HAB 2")} className="CH1-6" d="M94.5,123.5h-20c-3.8,0-7-3.1-7-7l0,0c0-3.8,3.1-7,7-7h20c3.8,0,7,3.1,7,7l0,0
      C101.5,120.4,98.4,123.5,94.5,123.5z"/>
    <path id="BH2" onClick={toggleDrawer('bottom', true, "cama B HAB 2")} className="CH1-6" d="M94.5,79.5h-20c-3.8,0-7-3.1-7-7l0,0c0-3.8,3.1-7,7-7h20c3.8,0,7,3.1,7,7l0,0
      C101.5,76.4,98.4,79.5,94.5,79.5z"/>
    <line className="H1-6" x1="150.5" y1="8.5" x2="150.5" y2="272.5"/>
    <line className="H1-6" x1="54.5" y1="96.5" x2="62.5" y2="96.5"/>
    <line className="H1-6" x1="54.5" y1="183.5" x2="62.5" y2="183.5"/>
    <line className="H1-6" x1="54.5" y1="96.5" x2="245.5" y2="96.5"/>
    <line className="H1-6" x1="54.5" y1="183.5" x2="245.5" y2="183.5"/>
    <path id="AH3" onClick={toggleDrawer('bottom', true, "cama A HAB 3")} className="CH1-6" d="M94.5,257.5h-20c-3.8,0-7-3.1-7-7l0,0c0-3.9,3.1-7,7-7h20c3.8,0,7,3.1,7,7l0,0
      C101.5,254.4,98.4,257.5,94.5,257.5z"/>
    <path id="BH3" onClick={toggleDrawer('bottom', true, "cama B HAB 3")} className="CH1-6" d="M94.5,213.5h-20c-3.8,0-7-3.1-7-7l0,0c0-3.9,3.1-7,7-7h20c3.8,0,7,3.1,7,7l0,0
      C101.5,210.4,98.4,213.5,94.5,213.5z"/>
    <path id="AH4" onClick={toggleDrawer('bottom', true, "cama A HAB 4")} className="CH1-6" d="M225.5,257.5h-20c-3.9,0-7-3.1-7-7l0,0c0-3.9,3.1-7,7-7h20c3.9,0,7,3.1,7,7l0,0
      C232.5,254.4,229.4,257.5,225.5,257.5z"/>
    <path id="BH4" onClick={toggleDrawer('bottom', true, "cama B HAB 4")} className="CH1-6" d="M225.5,213.5h-20c-3.9,0-7-3.1-7-7l0,0c0-3.9,3.1-7,7-7h20c3.9,0,7,3.1,7,7l0,0
      C232.5,210.4,229.4,213.5,225.5,213.5z"/>
    <path id="AH5" onClick={toggleDrawer('bottom', true, "cama A HAB 5")} className="CH1-6" d="M225.5,167.5h-20c-3.9,0-7-3.1-7-7l0,0c0-3.9,3.1-7,7-7h20c3.9,0,7,3.1,7,7l0,0
      C232.5,164.4,229.4,167.5,225.5,167.5z"/>
    <path id="BH5" onClick={toggleDrawer('bottom', true, "cama B HAB 5")} className="CH1-6" d="M225.5,123.5h-20c-3.9,0-7-3.1-7-7l0,0c0-3.8,3.1-7,7-7h20c3.9,0,7,3.1,7,7l0,0
      C232.5,120.4,229.4,123.5,225.5,123.5z"/>
    <path id="AH6" onClick={toggleDrawer('bottom', true, "cama A HAB 6")} className="CH1-6" d="M225.5,79.5h-20c-3.9,0-7-3.1-7-7l0,0c0-3.8,3.1-7,7-7h20c3.9,0,7,3.1,7,7l0,0
      C232.5,76.4,229.4,79.5,225.5,79.5z"/>
    <path id="BH6" onClick={toggleDrawer('bottom', true, "cama B HAB 6")} className="CH1-6" d="M225.5,35.5h-20c-3.9,0-7-3.1-7-7l0,0c0-3.8,3.1-7,7-7h20c3.9,0,7,3.1,7,7l0,0
      C232.5,32.4,229.4,35.5,225.5,35.5z"/>
    <text transform="matrix(1 0 0 1 129.707 199.7578)" className="H1-6">H1</text>
    <text transform="matrix(1 0 0 1 130.6265 109.5151)" className="H1-6">H2</text>
    <text transform="matrix(1 0 0 1 130.1416 21.7271)" className="H1-6">H3</text>
    <text transform="matrix(1 0 0 1 157.1616 21.2827)" className="H1-6">H4</text>
    <text transform="matrix(1 0 0 1 156.687 109.4346)" className="H1-6">H5</text>
    <text transform="matrix(1 0 0 1 156.7578 199.7373)" className="H1-6">H6</text>
    </svg>
    <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false, '')}
        onOpen={toggleDrawer('bottom', true, '')}
      >
      <div>
        <div className={classes.row}>
          <span className={classes.spacer} />
          <Typography variant="h4" gutterBottom>
            {state.cama}
          </Typography>
        </div>
        <TabV/>
      </div>
    </SwipeableDrawer>
    </div>
  );
  }
