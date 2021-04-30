/* eslint-disable react/prop-types */
import { Container } from '@material-ui/core';

import ProductList from './ProductList';
import SectionHeader from './SectionHeader';

const Latest = ({ data }) => (
  <Container maxWidth="md">
    <SectionHeader title="Latest Arrivals" />
    <ProductList data={data} />
  </Container>
);

export default Latest;
