/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Container,
  Grid,
  useMediaQuery,
  Collapse,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import { ExpandLess, ExpandMore } from '@material-ui/icons';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { allProducts, getPageByName } from '../lib/api';
import ProductsSection from '../components/products/ProductsSection';
import Filters from '../components/products/Filter';
import Meta from '../components/Meta';

const productStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      marginTop: 70,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 150,
    },
  },
  productsGrid: {
    maxWidth: '100%',
    padding: 0,
    justifyContent: 'center',
  },
}));

const Products = ({ products, productPage }) => {
  const classes = productStyles();
  const theme = useTheme();
  const [openFilters, setOpenFilters] = useState(false);
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg">
      <Meta
        title={productPage.seo.title}
        description={productPage.seo.description}
      />
      <Grid
        className={classes.root}
        container
        direction={isScreenSmall ? 'column' : 'row'}
      >
        <Hidden smDown>
          <Grid md={3} item>
            <Filters />
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <List>
            <ListItem
              button
              onClick={() => {
                setOpenFilters(!openFilters);
              }}
              divider
            >
              <ListItemText primary="Filters" />
              {openFilters ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openFilters} timeout="auto">
              <List component="div" disablePadding>
                <ListItem>
                  <Filters />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Hidden>
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
  const pageName = 'Products';
  const productPage = await getPageByName(pageName);
  const products = await allProducts();

  return {
    props: {
      productPage,
      products,
    },
  };
}

export default Products;
