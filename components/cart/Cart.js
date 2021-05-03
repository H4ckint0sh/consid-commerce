/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
import { Button, Drawer, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { RiMenuUnfoldLine } from 'react-icons/ri';

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { selectItems, selectAmount } from '../../redux/cartSlice';
import CartItemCard from './CartItemCard';

const drawerWidth = 310;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  closeIcon: {
    margin: '10px',
  },
  title: {
    textAlign: 'center',
    padding: theme.spacing(0, 0, 3, 0),
  },
  chekout: {
    margin: theme.spacing(0, 2, 2, 2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  total: {
    display: 'flex',
    alignItems: 'center',
  },
}));

// eslint-disable-next-line react/prop-types
const Cart = ({ open, handleCartOpen }) => {
  const classes = useStyles();
  const cartItems = useSelector(selectItems);
  const totalAmount = useSelector(selectAmount);

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="right"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={open}
      onClose={() => handleCartOpen()}
    >
      <div className={classes.content}>
        <IconButton onClick={handleCartOpen} className={classes.closeIcon}>
          <RiMenuUnfoldLine color="black" />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Shopping Cart
        </Typography>
        {cartItems &&
          cartItems.map((item) => <CartItemCard key={item.id} data={item} />)}
      </div>
      <div className={classes.chekout}>
        <div className={classes.total}>
          <Typography>Subtotal: </Typography>
          <Typography variant="h6">{`${totalAmount} $`}</Typography>
        </div>
        <Link href="/checkout">
          <Button
            color="primary"
            disabled={!totalAmount}
            onClick={handleCartOpen}
            variant="contained"
          >
            Chekout
          </Button>
        </Link>
      </div>
    </Drawer>
  );
};

export default Cart;
