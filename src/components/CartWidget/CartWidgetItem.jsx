import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Typography, Button } from '@mui/material';

export default function CartItem( {item} ) {

    const { removeItem } = useContext(CartContext); 
    const remove = (item) =>{
        removeItem(item);
    }
    

    return (
        <div>
            <Typography>
                {item.title} 
                {item.quantity} units ${item.price} - subtotal ${item.price*item.quantity}
                <Button style={{display: 'inline'}} onClick={() => remove(item)}> x </Button>
            </Typography>
             
        </div>
    )
}