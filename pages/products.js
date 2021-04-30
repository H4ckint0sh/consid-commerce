/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Container, Grid, useMediaQuery } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { allProducts } from '../lib/api';
import ProductsSection from '../components/products/ProductsSection';
import Filters from '../components/products/Filter';

const productStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 150,
  },
  productsGrid: {
    maxWidth: '100%',
    padding: 0,
    justifyContent: 'center',
  },
});

const Products = ({ products }) => {
  const classes = productStyles();
  const theme = useTheme();
  // eslint-disable-next-line no-unused-vars
  const [openFilters, setOpenFilters] = useState(false);
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg">
      <Grid
        className={classes.root}
        container
        direction={isScreenSmall ? 'column' : 'row'}
      >
        <Grid md={3} item>
          <Filters />
        </Grid>
        <Grid
          sm={12}
          md={9}
          item
          spacing={3}
          container
          direction="row"
          className={classes.productsGrid}
        >
          <ProductsSection products={products} />
        </Grid>
      </Grid>
    </Container>
  );
};

export async function getStaticProps() {
  const products = await allProducts();

  return {
    props: {
      products,
    },
  };
}

export default Products;
