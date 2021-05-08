/* eslint-disable react/prop-types */
import { startPage, latestProducts } from '../lib/api';

import Hero from '../components/home/Hero';
import Latest from '../components/latest-arrivals/Latest';
import Provide from '../components/why/Why';
import Meta from '../components/Meta';

const Home = ({ content, products }) => (
  <>
    <Meta title={content.seo.title} description={content.seo.description} />
    <Hero img={content.mainImage.url} title={content.title} />
    <Provide />
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
