import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RiAddLine } from 'react-icons/ri';

const drawerWidth = 240;

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
  toolbar: '100px',
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

// eslint-disable-next-line react/prop-types
const Cart = ({ open, handleSidebarOpen }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      className={classes.drawer}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={open}
      onClose={() => handleSidebarOpen()}
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
