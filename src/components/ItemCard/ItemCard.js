import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard(props) {
    const [count, setCount] = useState(0);
    const stock = props.stock || 10;
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
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {props.title || 'Test'}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {count || 0}
        </Typography>
        
      </CardContent>
      <CardActions sx={{ justifyContent : 'space-between' }}>
        <Button size="small" onClick={remove}>-</Button>
        <Button size="small">Add To Cart</Button>
        <Button size="small" onClick={add}>+</Button>
      </CardActions>
    </Card>
  );
}

