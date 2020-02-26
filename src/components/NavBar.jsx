import React from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './NavBar.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "#B90506"
  },
  title: {
    flexGrow: 1,
    marginLeft: "50px"
  }
}));

function NavBar() {
  const classes = useStyles();
  const content = (
    <div className={`${classes.root} nav-bar`}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Dota Tracker
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById('nav-hook'));
}

export default NavBar;
