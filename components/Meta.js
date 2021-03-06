/* eslint-disable react/prop-types */
import Head from 'next/head';

const Meta = ({ title, keywords, description }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <title>{title}</title>
  </Head>
);

Meta.defaultProps = {
  title: 'Consid Commers',
  keywords: 'E-commers, shopping, store',
  description: 'Use ConsidCommers, Buy Smart',
};

export default Meta;
