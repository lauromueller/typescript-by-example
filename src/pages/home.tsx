import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ProductList } from '../components';

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 16,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ProductList />
    </div>
  );
};

export default Home;
