/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';

import { RiAddLine, RiSubtractLine, RiDeleteBin7Line } from 'react-icons/ri';

import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} from '../../redux/cartSlice';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  root: {
    borderWidth: 0,
    display: 'flex',
    width: '90%',
    transform: 'scale(.95)',
    transition: 'box-shadow 1s, transform .5s',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1)',
      boxShadow: '5px 20px 30px rgba(0, 0, 0, 0.2)',
    },
  },
  details: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  cover: {
    width: 100,
    marginRight: '20px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(1),
  },
  quantity: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingLeft: 0,
  },
  quantityNumber: {
    margin: theme.spacing(0, 1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard({ data }) {
  const { name, price, imageUrl, quantity } = data;
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={imageUrl}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="button">{name}</Typography>
            <Typography variant="caption" color="textSecondary">
              description
            </Typography>
            <Typography variant="button" color="primary">
              {price}$
            </Typography>
          </CardContent>
          <div className={classes.actions}>
            <div className={classes.quantity}>
              <IconButton
                onClick={() => dispatch(subtractItemQuantity(data))}
                size="small"
                aria-label="subtract"
              >
                <RiSubtractLine />
              </IconButton>
              <Typography className={classes.quantityNumber}>
                {quantity}
              </Typography>
              <IconButton
                onClick={() => dispatch(addItemQuantity(data))}
                size="small"
                aria-label="add"
              >
                <RiAddLine />
              </IconButton>
            </div>
            <IconButton
              onClick={() => dispatch(removeFromCart(data))}
              color="secondary"
              aria-label="delete"
            >
              <RiDeleteBin7Line />
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  );
}
