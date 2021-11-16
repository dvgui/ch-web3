import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ButtonActions from './ButtonActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/* This component is each individual product card */



export default function BasicCard({product}) {


  const [inputType, setInputType] = useState('input');
  
  const handleInter = () => {
    setInputType('button');
  }


  return (
    <Grid item xs={4}>

      <Card sx={{ minWidth: 275 }}>
        <Link to={`/product/${product.id}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.title} - {product.price}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {product.description.substring(0, 55)}...
          </Typography>
        </CardContent>
        </Link>
        <CardMedia component="img" 
          image={product.image} 
          alt={product.title} 
          style={{
            height: '15rem',
            width: 'auto',
            display: 'inline'
          }}
        />
         
         <CardActions handleInter={handleInter} sx={{ justifyContent : 'space-between' }}>
          {inputType === 'input' ?
            <ButtonActions product={product} handleInter={handleInter} />
            :
            <Link to='/cart' style={{ width: '100%' }}>
              <Button >
              Purchase
              </Button>
            </Link>
          }
         </CardActions>       

      </Card>

    </Grid>
  );
}

