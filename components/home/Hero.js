/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      height: '90vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
    },
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  primaryTitle: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#303030',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },
    fontSize: '70px,',
  },
  span: {
    color: 'white',
  },
  button: {
    marginTop: '30px',
  },
}));

const Hero = ({ img, title }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <section>
      <div
        className={classes.container}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <Grid
          style={{ height: '80%', paddingTop: '200px' }}
          justify="center"
          container
        >
          <Grid
            container
            item
            alignItems="center"
            justify="center"
            xs={isScreenMedium ? 8 : 4}
          >
            <Grid>
              <Typography
                className={classes.primaryTitle}
                display="inline"
                variant="h3"
              >
                {title}
              </Typography>
              <br />
              <Link href="/products">
                <Button
                  className={classes.button}
                  size={isScreenMedium ? 'medium' : 'large'}
                  variant="contained"
                  color="primary"
                >
                  Start Shopping
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Hero;
