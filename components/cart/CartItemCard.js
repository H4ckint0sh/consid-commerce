import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { RiAddLine, RiSubtractLine, RiDeleteBin7Line } from 'react-icons/ri';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  cover: {
    width: 150,
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

export default function MediaControlCard() {
  const classes = useStyles();
  // const theme = useTheme();ß

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="/static/images/cards/live-from-space.jpg"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="button">Live From Space</Typography>
            <Typography variant="caption" color="textSecondary">
              Mac Miller
            </Typography>
            <Typography variant="button" color="primary">
              25$
            </Typography>
          </CardContent>
          <div className={classes.actions}>
            <div className={classes.quantity}>
              <IconButton size="small" aria-label="subtract">
                <RiSubtractLine />
              </IconButton>
              <Typography className={classes.quantityNumber}>3</Typography>
              <IconButton size="small" aria-label="add">
                <RiAddLine />
              </IconButton>
            </div>
            <IconButton color="secondary" aria-label="delete">
              <RiDeleteBin7Line />
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  );
}
