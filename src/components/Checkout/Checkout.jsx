import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../context/CartContext';
import UserForm from './UserForm';

function Checkout() {
    const { cartList, cartTotal } = useCartContext();

    // useEffect(() => {
    //     effect

    //     }
    // }, [input])

    return (
        <div>
            <Typography variant="h2" component="div">
                Checkout
            </Typography>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        bgcolor: '#cfe8fc',
                        padding: '4rem 3rem',
                        margin: '2rem 4rem',
                    }}
                >
                    {cartList.length === 0 ? (
                        <>
                            <Typography variant="h4">
                                The cart is empty
                            </Typography>
                            <Link
                                to="/"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'inherit',
                                }}
                            >
                                <Button>Home</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Typography variant="h4">
                                Order Total ${cartTotal()}
                            </Typography>
                            <UserForm />
                        </>
                    )}
                </Box>
            </Container>
        </div>
    );
}

export default Checkout;
