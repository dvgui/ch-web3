import * as React from 'react';
import { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Product from "../Product/Product";

/* This is the product detail container */



export default function SimpleContainer(props) {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProduct(prodId) {
    let prodRes = await fetch('https://fakestoreapi.com/products/' + prodId);
    let prodJson = await prodRes.json();
    setProduct(prodJson);
    console.log('https://fakestoreapi.com/products/' + prodId);
  }

  useEffect( () => {
    getProduct(props.product)
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  } , )

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ 
          bgcolor: 'pink', 
          padding: '1rem 2rem',
          margin: '1rem' }}>
        <>{loading ? <h3>Loading...</h3> : <Product product={product} />}</>
        </Box>
      </Container>
    </React.Fragment>
  );
}
