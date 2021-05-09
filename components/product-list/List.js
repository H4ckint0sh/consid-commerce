/* eslint-disable react/prop-types */
import { Container } from '@material-ui/core';

import ProductList from './ProductList';
import SectionHeader from './SectionHeader';

const List = ({ data, title }) => (
  <section>
    <Container maxWidth="md">
      <SectionHeader title={title} />
      <ProductList data={data} />
    </Container>
  </section>
);

export default List;
