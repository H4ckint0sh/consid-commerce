import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  RiHomeSmile2Line,
  RiStore2Line,
  RiMenuFoldLine,
  RiMailSendLine,
  RiBuilding4Line,
} from 'react-icons/ri';

import { useRouter } from 'next/router';

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
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeContainer: {
    alignSelf: 'flex-end',
  },
  closeIcon: {
    margin: '10px ',
  },
  title: {
    margin: '5px 0px 20px 0',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: { fontSize: '25px' },
}));

// eslint-disable-next-line react/prop-types
const Cart = ({ open, handleSidebarOpen }) => {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
    handleSidebarOpen();
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={open}
      onClose={() => handleSidebarOpen()}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div className={classes.toolbar}>
        <div className={classes.closeContainer}>
          <IconButton onClick={handleSidebarOpen} className={classes.closeIcon}>
            <RiMenuFoldLine color="inherit" />
          </IconButton>
        </div>
        <Typography className={classes.title} variant="h6">
          Consid Commerce
        </Typography>
      </div>
      <List>
        <ListItem
          button
          selected={router.pathname === '/'}
          onClick={() => {
            handleClick('/');
          }}
        >
          <ListItemIcon>
            <RiHomeSmile2Line className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          selected={router.pathname === '/products'}
          onClick={() => {
            handleClick('/products');
          }}
        >
          <ListItemIcon>
            <RiStore2Line className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem
          button
          selected={router.pathname === '/about'}
          onClick={() => {
            handleClick('/about');
          }}
        >
          <ListItemIcon>
            <RiBuilding4Line className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem
          button
          selected={router.pathname === '/contact'}
          onClick={() => {
            handleClick('/contact');
          }}
        >
          <ListItemIcon>
            <RiMailSendLine className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Cart;
