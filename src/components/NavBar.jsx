import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AuthContext from './AuthContext';
import './NavBar.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: '#B90506'
  },
  title: {
    flexGrow: 1,
    marginLeft: '30px'
  }
}));

function NavBar() {
  const auth = useContext(AuthContext);
  const classes = useStyles();

  function clickHandler() {
    auth.logout();
  }

  const content = (
    <div className={`${classes.root} nav-bar`}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Dota Tracker
          </Typography>
          {auth.isLoggedIn && <Button color="inherit" onClick={clickHandler}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById('nav-hook'));
}

export default NavBar;
