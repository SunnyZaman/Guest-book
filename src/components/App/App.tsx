import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import Home from '../Home/Home';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          🍔
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Guest Book
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>

        </Toolbar>
      </AppBar>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
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