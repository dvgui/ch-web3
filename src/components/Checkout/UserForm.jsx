import {
    Button,
    FormControl,
    FormHelperText,
    Container,
    Grid,
    Input,
    InputLabel,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../service/getFirestore';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const schema = yup.object({
    fullName: yup.string().required(),
    emailAddress: yup.string().email().required(),
    phoneNumber: yup.string().min(6).required(),
});

function UserForm() {
    const { cartList, clearCart, cartTotal } = useCartContext();
    const [orderId, setOrderId] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const createOrder = async (data) => {
        //console.log(data);
        //use local date or try to generate from firebase
        let date = new Date();
        const buyer = {
            name: data.fullName,
            email: data.emailAddress,
            phone: data.phoneNumber,
        };
        const order = {
            buyer: buyer,
            order: cartList,
            date: date,
            total: cartTotal(),
        };
        console.log(order);
        try {
            const dbQuery = getFirestore();
            let { id } = await dbQuery.collection('orders').add(order);
            setOrderId(id);
        } catch (err) {
            console.log('Error saving order ', err);
        } finally {
            //setLoading(false);
        }
    };

    return (
        <Grid
            container
            direction="column"
            spacing={4}
            sx={{ margin: '2rem', padding: '2rem' }}
        >
            {orderId ? (
                <Container>
                    <Typography variant="h2" component="div">
                        Your order ID is {orderId}
                    </Typography>
                    <Link
                        to="/"
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                    >
                        <Typography component="div">Back to Home</Typography>
                    </Link>
                </Container>
            ) : (
                <>
                    <FormControl required={true}>
                        <InputLabel htmlFor="email-input">
                            Email address
                        </InputLabel>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.emailAddress?.message}
                        </Typography>
                        <Input
                            fullWidth={false}
                            id="email-input"
                            aria-describedby="email-address"
                            {...register('emailAddress')}
                        />
                        <FormHelperText id="email-helper-text">
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    <FormControl required={true}>
                        <InputLabel htmlFor="name-input">Full Name</InputLabel>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.fullName?.message}
                        </Typography>
                        <Input
                            id="name-input"
                            aria-describedby="full-name"
                            {...register('fullName')}
                        />
                        <FormHelperText id="name-helper-text">
                            Please enter your First and Last Name
                        </FormHelperText>
                    </FormControl>

                    <FormControl required={true}>
                        <InputLabel htmlFor="phone-input">
                            Phone Number
                        </InputLabel>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.phoneNumber?.message}
                        </Typography>
                        <Input
                            {...register('phoneNumber')}
                            id="phone-input"
                            aria-describedby="phone-number"
                        />
                        <FormHelperText id="phone-helper-text">
                            Please enter your best Phone Number
                        </FormHelperText>
                    </FormControl>
                    <Box>
                        <Button onClick={handleSubmit(createOrder)}>
                            Submit
                        </Button>
                        <Button onClick={clearCart}>Delete</Button>
                    </Box>
                </>
            )}
        </Grid>
    );
}

export default UserForm;
