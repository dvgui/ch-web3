import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartWidgetItem from './CartWidgetItem';
import { Button, Card, CardActions, 
    CardContent, Typography } from '@mui/material';

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
            <Button size="small">Cart</Button>
            <Button size="small">Checkout</Button>
          </CardActions>
        </Card>
    )
}
