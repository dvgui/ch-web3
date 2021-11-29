import { Button, FormControl, FormHelperText, Container,
  Grid, Input, InputLabel, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useState } from 'react';

import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../service/getFirestore';

function UserForm() {

    const { cartList, clearCart, cartTotal } = useCartContext();
    const [orderId, setOrderId] = useState();

    const createOrder = async (e) => {
        e.preventDefault();
        //use local date or try to generate from firebase
        let date;
        const buyer = {name: 'name',email: 'email',phone: 'phone'};
        const order = {buyer: buyer, order: cartList, date: date, total: cartTotal()};
        console.log(order);
        try {
            const dbQuery = getFirestore();
            setOrderId(await dbQuery.collection('orders').add(order));
   
          } catch (err) {
            console.log("Error saving order ", err);
          } finally {
            //setLoading(false);
          }
    }

    return (
        <Grid container direction="column" spacing={4} sx={{margin: "2rem", padding: "2rem"}}>
          {orderId? 
            <Container>
              <Typography variant="h2" component="div">Your order ID is {orderId}</Typography>
            </Container>
            :  
            <>
              <FormControl>
                <InputLabel  htmlFor="email-input">Email address</InputLabel>
                <Input fullWidth={false} id="email-input" aria-describedby="email-address" />
                <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="name-input">Full Name</InputLabel>
                <Input id="name-input" aria-describedby="full-name" />
                <FormHelperText id="name-helper-text">Please enter your First and Last Name</FormHelperText>
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
                <Input id="phone-input" aria-describedby="phone-number" />
                <FormHelperText id="phone-helper-text">Please enter your best Phone Number</FormHelperText>
              </FormControl>
              <Box>
                <Button onClick={createOrder}>Submit</Button>
                <Button onClick={clearCart}>Delete</Button>
              </Box>
            </>
          }
            

        </Grid>
    )
}

export default UserForm
