import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContainer from "../CardContainer/CardContainer";

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', height: '90vh', padding: '0 1rem' }}>
        <h1>{props.greeting}</h1>
        <h2>These are the products we have</h2>
        <CardContainer />
        </Box>
      </Container>
    </React.Fragment>
  );
}
