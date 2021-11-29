import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartWidgetItem from './CartWidgetItem';
import { Button, Card, CardActions, 
    CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartList, clearCart } = useCartContext();

    return (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
            Cart Items
            </Typography>
            <div>{cartList.map(item => <CartWidgetItem item={item}/>)}</div>
            {
                cartList !== [] ?
                <Button onClick={clearCart}>Delete</Button>
                :
                <Typography>Cart Empty</Typography>
            }
          </CardContent>
          <CardActions>
            <Link to='/cart' 
                style={{color: 'inherit', textDecoration: 'inherit'}}>
                <Button size="small">Cart</Button>
            </Link>
            <Link to='/checkout' 
                style={{color: 'inherit', textDecoration: 'inherit'}}>
                <Button size="small">Checkout</Button>
            </Link>
          </CardActions>
        </Card>
    )
}
