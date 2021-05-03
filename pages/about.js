/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import { Container, Grid } from '@material-ui/core';

import { StructuredText } from 'react-datocms';
import { getPageByName } from '../lib/api';

import Banner from '../components/contact/Banner';
import Meta from '../components/Meta';

const ContactUs = ({ aboutPage }) => {
  const { title, slug, content, mainImage, seo } = aboutPage;

  return (
    <>
      <Meta title={seo.title} description={seo.description} />
      <Banner title={title} slug={slug} url={mainImage.url} />
      <br />
      <br />
      <Container>
        <Grid container item justify="center">
          <Grid item xs={10} style={{}}>
            <StructuredText data={content} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const pageName = 'About';
  const aboutPage = await getPageByName(pageName);

  return {
    props: {
      aboutPage,
    },
  };
}

export default ContactUs;
