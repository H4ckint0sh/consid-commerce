/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core/styles';
import { StructuredText } from 'react-datocms';

import { getProductById, allProducts } from '../../../lib/api';

// import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1200px',
    width: '100%',
    margin: '100px auto',
    boxShadow: '0 0 5px #ccc',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '30px 0',
  },
  img: {
    width: '100%',
    height: '100%',
    maxHeight: '400px',
    display: 'block',
    objectFit: 'cover',
  },
  box: {
    maxWidth: '500px',
    minWidth: '290px',
    margin: '25px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
}));

const Product = ({ product }) => {
  const { name, price, imageUrl, description } = product;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <div>
          <img className={classes.img} src={imageUrl} alt="main-img" />
        </div>
        <div className={classes.box}>
          <div className={classes.row}>
            <h2>{name}</h2>
            <span>$ {price}</span>
          </div>
          <StructuredText data={description} />
          <button className={classes.button}>Add to Cart </button>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const products = await allProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const product = await getProductById(id);

  return {
    props: {
      product,
    },
  };
}

export default Product;
