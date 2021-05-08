/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable operator-linebreak */
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
  RiSunLine,
  RiMoonLine,
} from 'react-icons/ri';

import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { selectTotalItems } from '../redux/cartSlice';
import { selectDarkMode, toggleDarkMode } from '../redux/themeSlice';

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
    [theme.breakpoints.up('md')]: {
      height: '100px',
    },
  },
  menuButton: {
    marginRight: 50,
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
  const dispatch = useDispatch();

  const arrayPaths = ['/', '/about', '/contact'];

  const badgeNumber = useSelector(selectTotalItems);
  const darkMode = useSelector(selectDarkMode);

  const [onTop, setOnTop] = useState(!arrayPaths.includes(router.pathname));
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
      setOnTop(false);
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
        color={onTop ? 'transparent' : 'inherit'}
        className={classes.appBar}
      >
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={(e) => handleSidebarOpen()}
            >
              <RiMenu2Line color={!onTop ? 'inherit' : 'white'} />
            </IconButton>
            <Hidden smDown>
              <div className={classes.listContainer}>
                {menuList.map((el) => (
                  <div
                    style={{
                      color: onTop ? 'white' : 'inherit',
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
                aria-label="items in cart"
              >
                <Badge badgeContent={badgeNumber} color="primary">
                  <RiShoppingCartLine color={!onTop ? 'inherit' : 'white'} />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => dispatch(toggleDarkMode(!darkMode))}
              >
                {darkMode ? (
                  <RiSunLine color={!onTop ? 'inherit' : 'white'} />
                ) : (
                  <RiMoonLine color={!onTop ? 'inherit' : 'white'} />
                )}
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
