import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExploreIcon from '@material-ui/icons/Explore';
import FaceIcon from '@material-ui/icons/Face';
import AssignmentIcon from '@material-ui/icons/Assignment';

const mainListMapping = [
  {
    text: 'Dashboard',
    component: <DashboardIcon />
  },
  {
    text: 'Experiments',
    component: <ExploreIcon />
  },
  {
    text: 'Users',
    component: <FaceIcon />
  }
];

const listItems = mainListMapping.map((item) => {
  return (
    <ListItem button key={item.text}>
      <ListItemIcon>
        {item.component}
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  );
});

export const mainListItems = (
  <div>
    <ListSubheader>Main</ListSubheader>
    {listItems}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader>Saved Experiments</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Type I" />
    </ListItem>
  </div>
);
