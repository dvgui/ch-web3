import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function ButtonActions({product, handleInter}) {

    const [count, setCount] = useState(0);

    const stock = product.stock || 5;

    const add = () => {
        if (count < stock) {
            setCount(count+1);
        }
    }
    const remove = () => {
        if (count > 0) {
            setCount(count-1);
        }
    }


    return (
        <>
            <Button size="small" onClick={remove}>-</Button>
            {count}
            <Button onClick={handleInter} size="small">Add To Cart</Button>
            <Button size="small" onClick={add}>+</Button>
        </>
    )
}
