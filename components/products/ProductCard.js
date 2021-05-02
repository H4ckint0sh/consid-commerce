/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
} from '@material-ui/core';

import { RiShoppingCartLine, RiHeartAddLine } from 'react-icons/ri';

import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 210,
    maxWidth: 210,
    position: 'relative',
    transform: 'scale(.95)',
    transition: 'box-shadow 1s, transform .5s',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1)',
      boxShadow: '5px 20px 30px rgba(0, 0, 0, 0.2)',
    },
  },
  media: {
    width: '100%',
    height: 210,
    backgroundSize: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  contentContainer: {
    display: 'flex',
    padding: 0,
    margin: '10px 20px 0 20px',
    justifyContent: 'space-between',
  },
  actionsContainer: {
    display: 'flex',
    padding: 0,
    margin: '0 10px 10px 10px',
    justifyContent: 'space-between',
  },
}));

export default function ProductCard({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCard = (e) => {
    e.preventDefault();
    const {
      id,
      name,
      price,
      mainImage: { url },
      description: { value },
    } = data;

    const cartItem = {
      id,
      name,
      price,
      imageUrl: url,
      description: value,
      quantity,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <Link href="/product/[id]" as={`/product/${data.id}`}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={data.mainImage.url}
          title={data.name}
        />
        <div className={classes.contentContainer}>
          <Typography variant="h6" component="h6" className={classes.title}>
            {data.name}
          </Typography>
          <Typography color="primary">{data.price} $</Typography>
        </div>
        <div className={classes.actionsContainer}>
          <IconButton onClick={(e) => handleAddToCard(e)} color="primary">
            <RiShoppingCartLine />
          </IconButton>
          <IconButton color="default">
            <RiHeartAddLine />
          </IconButton>
        </div>
      </Card>
    </Link>
  );
}
