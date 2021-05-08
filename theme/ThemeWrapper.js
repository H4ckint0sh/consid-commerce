/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import { useEffect, useMemo } from 'react';

import { useMediaQuery } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from '../redux/themeSlice';

const ThemeWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    dispatch(toggleDarkMode(prefersDarkMode));
  }, [dispatch, prefersDarkMode]);

  const darkMode = useSelector(selectDarkMode);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: '#E75C43',
          },
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
