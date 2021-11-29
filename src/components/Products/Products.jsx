import * as React from 'react'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ProductCard from '../ProductCard/ProductCard'
import { getFirestore } from '../../service/getFirestore'
/* This is the component that holds all the products on the main page */

export default function Products(props) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const category = props.category

    useEffect(() => {
        const getProducts = async () => {
            try {
                const dbQuery = getFirestore()
                const collection = category
                    ? await dbQuery
                          .collection('items')
                          .where('category', '==', category)
                          .limit(20)
                          .get()
                    : await dbQuery.collection('items').limit(20).get()
                collection.size === 0 && console.log('No results')
                setProducts(
                    collection.docs.map((doc) => {
                        let data = doc.data()
                        return { id: doc.id, ...data }
                    })
                )
            } catch (err) {
                console.log('Error searching items ', err)
            } finally {
                setLoading(false)
            }
        }

        getProducts()
    }, [category])

    /*   useEffect(() => {
    const getFetch = async () => {
      if (category) {
        let prodRes = await fetch('https://fakestoreapi.com/products/category/'+category);
        let prodJson = await prodRes.json();
        setProducts(prodJson);
      }
      else {
        let prodRes = await fetch('https://fakestoreapi.com/products/');
        let prodJson = await prodRes.json();
        setProducts(prodJson);
      }    
    }
  

    getFetch()
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  } , [category]) */

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <>
                    {loading ? (
                        <h3>Loading...</h3>
                    ) : (
                        products.map((prod) => <ProductCard product={prod} />)
                    )}
                </>
            </Grid>
        </Box>
    )
}
