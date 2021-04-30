/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProductCard from './ProductCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
}));

export default function ProductList({ data }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container justify="center" spacing={2}>
        {data.map((item) => (
          <Grid key={item.id} item>
            <ProductCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
