import * as React from 'react';
import { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Product from "../Product/Product";
import { useParams } from 'react-router';
import { getFirestore } from '../../service/getFirestore';

/* This is the product detail container */



export default function ItemDetailContainer() {

  const {prodId} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getProducts = async () => {

      try {
        const dbQuery = getFirestore();
        const collection = await dbQuery.collection('items')
            .doc(prodId)
            .get()          
        collection.size === 0 && console.log("Product doesn't exist");
        setProduct({id : collection.id, ...collection.data() })

      } catch (err) {
        console.log("Error searching items ", err);
      } finally {
        setLoading(false);
      }
      
    }

    getProducts();

  }, [prodId])

/*   useEffect( () => {
    async function getProduct(prodId) {
      let prodRes = await fetch('https://fakestoreapi.com/products/' + prodId);
      let prodJson = await prodRes.json();
      setProduct(prodJson);
      console.log('https://fakestoreapi.com/products/' + prodId);
    }
    getProduct(prodId)
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  } , [prodId]) */

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
