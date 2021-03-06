/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import { Container, Grid } from '@material-ui/core';

import { StructuredText } from 'react-datocms';
import { getPageByName } from '../lib/api';

import ContactusForm from '../components/contact/ContactForm';
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
      <Container maxWidth="md">
        <Grid container item justify="center">
          <Grid item xs={12}>
            <StructuredText data={content} />
          </Grid>
          <Grid item xs={12}>
            {' '}
            <ContactusForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const pageName = 'Contact';
  const aboutPage = await getPageByName(pageName);

  return {
    props: {
      aboutPage,
    },
  };
}

export default ContactUs;
