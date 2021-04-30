import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    height: 60,
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  return (
    <Box my={3} mx={1}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.header}
      >
        <Typography variant="h6" gutterBottom>
          {/* {props.title} */}
        </Typography>
        {/* {props.children} */}
      </Grid>
    </Box>
  );
};

export default ProductCard;
