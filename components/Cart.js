import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RiAddLine } from 'react-icons/ri';

const useStyles = makeStyles(() => ({}));

// eslint-disable-next-line react/prop-types
const Cart = ({ isCartOpen, handleCartClose }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      className={classes.drawer}
      variant="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={isCartOpen}
      onClose={() => handleCartClose()}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button onClick={() => {}}>
          <ListItemIcon>
            <RiAddLine />
          </ListItemIcon>
          <ListItemText primary="Create Post" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default Cart;
