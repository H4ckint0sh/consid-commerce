/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { startPage } from '../lib/api';

import Why from '../components/Why';

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
    color: 'white',
    fontWeight: '500',
    marginLeft: '60%',
    marginRight: '150px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      marginLeft: '50%',
    },
  },
}));

export async function getStaticProps() {
  const content = await startPage();

  return {
    props: {
      content,
    },
  };
}

const Home = ({ content }) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.container}
        style={{
          backgroundImage: `url(${content.mainImage.url})`,
        }}
      >
        <Typography
          className={classes.primaryTitle}
          display="inline"
          variant="h2"
        >
          Use Consid Commers, Buy Smart
        </Typography>
      </div>
      <Why />
    </>
  );
};
export default Home;
