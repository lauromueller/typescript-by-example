import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ProductCard } from './index';
import { Product } from '../data-models';

const myFirstProduct: Product = {
  id: '1',
  title: 'My First Product',
  price: 50,
  tags: [],
  description: 'This is my first product',
};

const ProductList = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <ProductCard product={myFirstProduct} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProductCard product={myFirstProduct} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProductCard product={myFirstProduct} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProductCard product={myFirstProduct} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProductCard product={myFirstProduct} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProductCard product={myFirstProduct} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
