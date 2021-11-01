import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemCard from '../ItemCard/ItemCard';


export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <ItemCard title='Product 1' stock={5} />
        </Grid>
        <Grid item xs={4}>
          <ItemCard />
        </Grid>
        <Grid item xs={4}>
           <ItemCard />
        </Grid>
      </Grid>
    </Box>
  );
}