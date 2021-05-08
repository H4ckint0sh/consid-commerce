/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { makeStyles } from '@material-ui/core/styles';

const Banner = ({ title, slug, url }) => {
  const useStyles = makeStyles(() => ({
    contactUsBanner: {
      height: '500px',
      backgroundColor: 'aqua',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: ' center',
      flexDirection: 'column',
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      opacity: 1,
    },
    bannerHeadding: {
      fontSize: '25px',
      fontWeight: '800',
    },
    bannerTitle: {
      fontSize: '18px',
      fontWeight: '700',
    },
    fieldset: {
      borderRadius: '0px',
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className={classes.contactUsBanner}>
        <span className={classes.bannerHeadding}>
          <h1>{title}</h1>
        </span>
        <span className={classes.bannerTitle}>{slug}</span>
      </div>
    </>
  );
};

export default Banner;
