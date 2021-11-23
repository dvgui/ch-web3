import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartList, clearCart } = useCartContext();

    return (
        <div>
            <Typography variant="h2" component="div">Cart Items</Typography>
            <Container maxWidth="xl">
            <Box sx={{ 
                bgcolor: '#cfe8fc', 
                padding: '4rem 3rem',
                margin: '2rem 4rem' }}>
            <div>{cartList.map(item => <CartItem item={item}/>)}</div>
            {
                cartList.length === 0 ?
                <>
                <Typography variant="h4">The cart is empty</Typography>
                    <Link to='/' 
                    style={{color: 'inherit', textDecoration: 'inherit'}}>
                        <Button onClick={clearCart}>Home</Button>
                    </Link>
                </>
                :
                <Button onClick={clearCart}>Delete</Button>                
            }
            </Box>
            </Container>
        </div>
    )
}
