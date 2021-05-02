/* eslint-disable react/prop-types */
import { startPage, latestProducts } from '../lib/api';

import Hero from '../components/Hero';
import Latest from '../components/latest-arrivals/Latest';

const Home = ({ content, products }) => (
  <>
    <Hero img={content.mainImage.url} title={content.title} />
    <Latest data={products} />
  </>
);

export async function getStaticProps() {
  const content = await startPage();
  const products = await latestProducts();

  return {
    props: {
      content,
      products,
    },
  };
}

export default Home;
