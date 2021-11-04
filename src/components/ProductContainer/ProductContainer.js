import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCard from '../ProductCard/ProductCard';
//import { getFetch } from './getFetch';
/* This is the component that holds all the products on the main page */

export default function BasicGrid() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFetch = async () => {
    let prodRes = await fetch('https://fakestoreapi.com/products/');
    let prodJson = await prodRes.json();
    setProducts(prodJson);
  }

   
  useEffect(() => {
    /*
    getFetch
    .then(res => {
      setProducts(res);
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    */
    getFetch()
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    /*
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(res => setProducts(res))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    */

  } , [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <>{loading ? <h3>Loading...</h3> : products.map( prod => <ProductCard product={prod} />)}</>

      </Grid>
    </Box>
  );
}