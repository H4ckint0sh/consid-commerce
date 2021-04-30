/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@material-ui/core';

import { RiShoppingCartLine, RiHeartAddLine } from 'react-icons/ri';

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
    '&:hover $overlayText': {
      opacity: 1,
    },
  },
  media: {
    width: '100%',
    height: 210,
    backgroundSize: 'contain',
  },
  // overlay: {
  //   height: 250,
  //   background: 'rgba(0,0,0, .2)',
  //   position: 'absolute',
  //   width: '100%',
  //   left: 0,
  //   top: 0,
  //   bottom: 0,
  //   right: 0,
  //   opacity: 0,
  //   transition: 'all 0.4s ease-in-out 0s',
  // },
  overlayText: {
    height: 250,
    position: 'absolute',
    textAlign: 'center',
    paddingTop: '1em',
    paddingLeft: '1em',
    paddingRight: '1em',
    width: '100%',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    opacity: 0,
    transition: 'all 0.3s ease-in-out 0s',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
}));

export default function ProductCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={data.mainImage.url}
        title={data.name}
      />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.overlay}
      />
      <Grid
        container
        justify="flex-end"
        alignItems="flex-start"
        className={classes.overlayText}
      >
        <IconButton color="primary">
          <RiShoppingCartLine />
        </IconButton>
        <IconButton color="primary">
          <RiHeartAddLine />
        </IconButton>
      </Grid>
      <CardContent>
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6" component="h6" className={classes.title}>
            {data.name}
          </Typography>
          <Typography color="primary">{data.price} $</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
