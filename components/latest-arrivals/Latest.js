/* eslint-disable react/prop-types */
import { Container } from '@material-ui/core';

import ProductList from './ProductList';
import SectionHeader from './SectionHeader';

const Latest = ({ data }) => (
  <section>
    <Container maxWidth="md">
      <SectionHeader title="New Arrivals" />
      <ProductList data={data} />
    </Container>
  </section>
);

export default Latest;
