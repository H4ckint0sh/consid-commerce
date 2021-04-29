/* eslint-disable object-curly-newline */
import React from 'react';
import { Card, CardHeader, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import styles from './FeaturedProducts.module.css';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    marginTop: '-150px',
  },
  card: {
    width: '90%',
    height: '300px',
  },
}));

const Why = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container xs={12} justify="center">
      <Card className={classes.card}>
        <CardHeader>
          <Typography>Why Oss ?</Typography>
        </CardHeader>
      </Card>
    </Grid>
  );
};

export default Why;
