import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem';
import { Button, Typography } from '@mui/material';

export default function Cart() {
    const { cartList, clearCart } = useCartContext();

    return (
        <div>
            <div>Cart Items</div>
            <div>{cartList.map(item => <CartItem item={item}/>)}</div>
            {
                cartList !== [] ?
                <Button onClick={clearCart}>Delete</Button>
                :
                <Typography>Cart Empty</Typography>
            }
            
        </div>
    )
}
