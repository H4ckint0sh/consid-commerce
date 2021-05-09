/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    height: 60,
  },
}));

const ProductCard = ({ title }) => {
  const classes = useStyles();

  return (
    <Box my={3} mx={1}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.header}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      </Grid>
    </Box>
  );
};

export default ProductCard;
