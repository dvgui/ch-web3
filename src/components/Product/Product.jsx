import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import Grid from '@mui/material/Grid';

/* This component is each individual product card */


export default function BasicCard({product}) {

  const [count, setCount] = useState(0);
  const stock = product.stock || 5;
  function add(){
      if (count < stock) {
          setCount(count+1);
      }
  }
  function remove(){
      if (count > 0) {
          setCount(count-1);
      }
  }
  return (
    
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h5" component="div">
                {product.title} - {product.price}
              </Typography>
              <Typography variant="h5" component="div">
                {product.category}
              </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <CardContent>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
          </Box>
        </Box>
        <CardMedia component="img" 
            image={product.image} 
            alt={product.title} 
            style={{
              height: '25rem',
              width: 'auto',
            }}
        />
          
        <CardActions sx={{ justifyContent : 'space-between' }}>
            <Button size="small" onClick={remove}>-</Button>
            {count}
            <Button size="small">Add To Cart</Button>
            <Button size="small" onClick={add}>+</Button>
        </CardActions>
        
      </Card>

  );
}

