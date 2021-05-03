/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import { Container, Grid } from '@material-ui/core';

import { StructuredText } from 'react-datocms';
import { getPageByName } from '../lib/api';

import Banner from '../components/contact/Banner';

const ContactUs = ({ aboutPage }) => {
  const { title, slug, content, mainImage } = aboutPage;

  return (
    <>
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
