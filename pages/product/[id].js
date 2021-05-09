/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { StructuredText, Image } from 'react-datocms';

import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

import Meta from '../../components/Meta';
import OtherProducts from '../../components/product-list/List';

import { getProductById, allProducts, latestProducts } from '../../lib/api';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      margin: '100px auto 50px auto',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '200px auto 50px auto',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    marginRight: '50px',
  },
  description: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '100px',
    },
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      paddingRight: '100px',
    },
  },
  addButton: {
    marginRight: '50px',
  },
}));

const Product = ({ product, products }) => {
  const { id, name, price, mainImage, description } = product;
  const [quantity, setQuantity] = useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isScreenMedium = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAddToCard = () => {
    const cartItem = {
      id,
      name,
      price,
      imageUrl: mainImage.url,
      description,
      quantity,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <Container maxWidth="lg">
      <Meta title={name} />
      <Grid
        className={classes.container}
        container
        direction={isScreenMedium ? 'column' : 'row'}
        justify="center"
        spacing={3}
      >
        <Grid container item alignItems="center" xs={12} sm={12} md={4}>
          <Image width="100%" data={mainImage.responsiveImage} />
        </Grid>
        <Grid container alignItems="center" item xs={12} sm={12} md={8}>
          <div className={classes.row}>
            <Typography className={classes.name} component="h5" variant="h5">
              {name}
            </Typography>
            <Typography component="h5" color="primary" variant="h5">
              ${price}
            </Typography>
          </div>
          <div className={classes.description}>
            <StructuredText data={description} />
          </div>
          <div className={classes.controls}>
            <Button
              className={classes.addButton}
              size={isScreenMedium ? 'small' : 'medium'}
              variant="contained"
              color="primary"
              onClick={() => handleAddToCard()}
            >
              Add to cart
            </Button>
            <Link href="/products">
              <Button
                size={isScreenMedium ? 'small' : 'medium'}
                variant="outlined"
                color="primary"
                onClick={() => handleAddToCard()}
              >
                back to products
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
      <OtherProducts data={products} title="Other products you might like" />
    </Container>
  );
};

export async function getStaticPaths() {
  const products = await allProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const product = await getProductById(id);
  const products = await latestProducts();

  return {
    props: {
      product,
      products,
    },
  };
}

export default Product;
