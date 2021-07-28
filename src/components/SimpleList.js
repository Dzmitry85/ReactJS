import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
<div>
      <List component="nav" aria-label="secondary mailbox folders">
       
        <ListItemLink  href="#simple-list">
          <ListItemText primary="Chat-1" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Chat-2" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Chat-3" />
        </ListItemLink>
      </List>
    </div>
  );
}