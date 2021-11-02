import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContainer from "../ProductContainer/ProductContainer";

/* This is the main section of the home page */

export default function SimpleContainer(props) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ 
          bgcolor: '#cfe8fc', 
          padding: '1rem 2rem',
          margin: '1rem' }}>
        <h1>{props.greeting}</h1>
        <h2>These are the products we have</h2>

        <CardContainer />
        </Box>
      </Container>
    </React.Fragment>
  );
}
