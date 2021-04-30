/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { Grid } from '@material-ui/core';
import ProductCard from '../latest-arrivals/ProductCard';

const ProductsSection = ({ products }) => (
  <>
    {products.map((item, index) => (
      <Grid item key={index}>
        <ProductCard data={item} />
      </Grid>
    ))}
  </>
);

export default ProductsSection;
