import { Drawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { RiAddLine } from 'react-icons/ri';
import CartItemCard from './CartItemCard';

const drawerWidth = 320;

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
  title: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
}));

// eslint-disable-next-line react/prop-types
const Cart = ({ open, handleCartOpen }) => {
  const classes = useStyles();

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
      <Typography className={classes.title} variant="h5">
        Shopping Cart
      </Typography>
      <CartItemCard />
    </Drawer>
  );
};

export default Cart;
