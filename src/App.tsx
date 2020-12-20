import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Product } from './data-models';
import { ProductCard } from './components';

const myFirstProduct: Product = {
  id: '1',
  title: 'My First Product',
  price: 50,
  tags: [],
  description: 'This is my first product',
};

const App = () => {
  return (
    <div>
      <Button color='primary' variant='contained'>
        Some text
      </Button>
      <ProductCard product={myFirstProduct} />
    </div>
  );
};

export default App;
