import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Product } from './data-models';

const myFirstProduct: Product = {
  id: '1',
  title: 'My First Product',
  price: 50,
  tags: [],
  description: 'This is my first product',
};

type ProductComponentProps = {
  product: Product;
};

const ProductComponent = (props: ProductComponentProps) => {
  const { product } = props;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className='App'>
      <Button color='primary' variant='contained'>
        Some text
      </Button>
      <ProductComponent product={myFirstProduct} />
    </div>
  );
};

export default App;
