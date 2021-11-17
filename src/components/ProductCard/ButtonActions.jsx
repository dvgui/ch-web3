import React from 'react';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';



export default function ButtonActions( {product, handleInter} ) {

    const [count, setCount] = useState(0);

    const stock = product.stock || 5;

    const { addToCart } = useContext(CartContext);

    const add = () => {
        count < stock && setCount(count+1);
    }
    const remove = () => {
        count > 0 && setCount(count-1);        
    }
    const ATC = () => {
        if (count > 0) {
            handleInter();
            addToCart({...product, quantity : count});
        }
    }


    return (
        <>
            <Button size="small" onClick={remove}>-</Button>
            {count}
            <Button onClick={ATC} size="small">Add To Cart</Button>
            <Button size="small" onClick={add}>+</Button>
        </>
    )
}
