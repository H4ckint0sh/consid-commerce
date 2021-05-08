/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '100px',
      marginTop: '100px',
    },
    borderRadius: 0,
    padding: theme.spacing(2, 0),
    display: 'flex',
    alignItems: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Container>
          <Grid container justify="center" alignItems="center">
            <Link href="/">
              <span>&copy; {new Date().getFullYear()} Consid Commerce</span>
            </Link>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;
