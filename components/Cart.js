import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RiAddLine } from 'react-icons/ri';

const drawerWidth = 300;

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
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
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
      <div className={classes.toolbar} />
      <List>
        <ListItem button onClick={() => {}}>
          <ListItemIcon>
            <RiAddLine />
          </ListItemIcon>
          <ListItemText primary="Create Post" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Cart;
