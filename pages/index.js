/* eslint-disable react/prop-types */
/* eslint-disable import/named */
// import { Image, renderMetaTags } from 'react-datocms';
// import Head from 'next/head';
import { allProducts } from '../lib/api';

export async function getStaticProps() {
  const products = await allProducts();

  return {
    props: {
      products,
    },
  };
}

const Home = () => <div>Start Page</div>;

export default Home;
