/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  Button,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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

const Hero = ({ img }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <Grid style={{ height: '100%' }} justify="center" container>
        <Hidden mdDown>
          <Grid item xs={8} />
        </Hidden>
        <Grid
          container
          item
          alignItems="center"
          justifyContent={isScreenMedium ? 'center' : 'flex-start'}
          xs={isScreenMedium ? 8 : 4}
        >
          <Grid>
            <Typography
              className={classes.primaryTitle}
              display="inline"
              variant="h2"
            >
              Use Consid Commers <span className={classes.span}>Buy Smart</span>
            </Typography>
            <br />
            <Button
              className={classes.button}
              size={isScreenMedium ? 'medium' : 'large'}
              variant="contained"
              color="primary"
            >
              Start Shopping
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
