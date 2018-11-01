import React, { Component } from 'react';
import Dashboard from './Dashboard';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { appStyles } from './UniversalStyleSheet';


class App extends Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.appContainer}>
          <Dashboard />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(appStyles)(App);
