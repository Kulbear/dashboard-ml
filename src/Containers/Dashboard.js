import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { dashboardStyles } from './UniversalStyleSheet';

class Dashboard extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>Placeholder...</div>
    );
  }
}

export default withStyles(dashboardStyles)(Dashboard);
