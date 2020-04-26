import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import { useStoreState } from '../../hooks';

function App() {
  const classes = useStyles();
  const entries = useStoreState(state => state.guestbook.entries);
  console.log(entries);
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          🍔
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div>
        <div>
          <Link to="/">Home Page</Link>
          <span> | </span>
          <Link to="/about">About Page</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Route exact path="/about">
            <h1>About Page</h1>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;