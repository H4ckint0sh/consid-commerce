/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Badge,
  CssBaseline,
  Hidden,
  useTheme,
  Button,
  emphasize,
  Container,
} from '@material-ui/core';

import {
  RiMenu2Line,
  RiShoppingCartLine,
  RiLoginBoxLine,
} from 'react-icons/ri';

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { selectTotalItems } from '../redux/cartSlice';

import Sidebar from './Sidebar';
import Cart from './cart/Cart';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      height: '100px',
    },
  },
  menuButton: {
    marginRight: 36,
  },
  listContainer: {
    width: '300px',
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listButton: {
    marginRight: '50px',
  },
  iconsContainer: {
    marginLeft: 'auto',
  },
}));

const menuList = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Products',
    href: '/products',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function Navbar() {
  const classes = useStyles();
  const router = useRouter();
  const arrayPaths = ['/'];

  const badgeNumber = useSelector(selectTotalItems);

  const [onTop, setOnTop] = useState(!!arrayPaths.includes(router.pathname));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname)) {
      return;
    }
    headerClass();
    window.onscroll = function () {
      headerClass();
    };

    return () => {
      setOnTop(false);
    };
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        color={onTop || router.pathname !== '/' ? 'transparent' : 'inherit'}
        className={classes.appBar}
      >
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={(e) => handleSidebarOpen()}
            >
              <RiMenu2Line
                color={!onTop || router.pathname !== '/' ? 'black' : 'white'}
              />
            </IconButton>
            <Hidden smDown>
              <div className={classes.listContainer}>
                {menuList.map((el) => (
                  <div
                    style={{
                      color:
                        onTop && router.pathname === '/' ? 'white' : 'black',
                      fontSize: '18px',
                    }}
                    key={el.name}
                  >
                    <Link href={el.href}>
                      <a>{el.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </Hidden>

            <div className={classes.iconsContainer}>
              <IconButton
                onClick={(e) => handleCartOpen()}
                color="inherit"
                aria-label="4 items in cart"
              >
                <Badge badgeContent={badgeNumber} color="primary">
                  <RiShoppingCartLine
                    color={
                      !onTop || router.pathname !== '/' ? 'inherit' : 'white'
                    }
                  />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <RiLoginBoxLine
                  color={
                    !onTop || router.pathname !== '/' ? 'inherit' : 'white'
                  }
                />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
        <Sidebar open={sidebarOpen} handleSidebarOpen={handleSidebarOpen} />
        <Cart open={cartOpen} handleCartOpen={handleCartOpen} />
      </AppBar>
    </div>
  );
}
