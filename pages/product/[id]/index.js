/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { StructuredText } from 'react-datocms';

import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

import Meta from '../../../components/Meta';

import { getProductById, allProducts } from '../../../lib/api';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '150px auto',
    },
  },
  root: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    minHeight: 500,
    justifyContent: 'space-around',
  },
  details: {
    flex: 0.8,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cover: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
      objectFit: 'contain',
    },
    [theme.breakpoints.down('sm')]: {
      height: 200,
      margin: '0 auto',
      objectFit: 'cover',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 300,
    },
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  addButton: {
    marginRight: '30px',
  },
}));

const Product = ({ product }) => {
  const { id, name, price, mainImage, description } = product;
  const [quantity, setQuantity] = useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
    <>
      <Meta title={name} />
      <Container className={classes.container} maxWidth="lg">
        <Card elevation={0} className={classes.root}>
          <CardMedia className={classes.cover} image={mainImage.url} />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <div className={classes.row}>
                <Typography component="h5" variant="h5">
                  {name}
                </Typography>
                <Typography component="h5" color="primary" variant="h5">
                  $ {price}
                </Typography>
              </div>
              <StructuredText data={description} />
            </CardContent>
            <div className={classes.controls}>
              <Button
                className={classes.addButton}
                size={isScreenSmall ? 'small' : 'medium'}
                variant="contained"
                color="primary"
                onClick={() => handleAddToCard()}
              >
                Add to cart
              </Button>
              <Link href="/products">
                <Button
                  size={isScreenSmall ? 'small' : 'medium'}
                  variant="outlined"
                  color="primary"
                  onClick={() => handleAddToCard()}
                >
                  back to products
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </>
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

  return {
    props: {
      product,
    },
  };
}

export default Product;
