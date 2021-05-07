import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Data from './WhyData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '-80px',
    },
  },
  container: {},
  paper: {
    padding: theme.spacing(5, 0),
    [theme.breakpoints.down('sm')]: {
      border: 'none',
      padding: theme.spacing(2, 0),
      borderBottom: '1px dashed rgba(0, 0, 0, 0.12)',
    },
  },
  list: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  avatar: {
    color: 'currentColor',
    fontSize: '3rem',
    backgroundColor: 'transparent',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          {Data.map((data) => (
            <Grid
              key={data.title}
              className={classes.container}
              item
              xs={12}
              md={3}
              sm={6}
            >
              <List className={classes.list}>
                <Paper variant="outlined" square className={classes.paper}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>{data.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={data.title}
                      secondary={data.details}
                    />
                  </ListItem>
                </Paper>
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
