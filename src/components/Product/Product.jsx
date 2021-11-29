import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ButtonActions from '../ProductCard/ButtonActions'
import { Link } from 'react-router-dom'
//import Grid from '@mui/material/Grid';

/* This component is each individual product card */

export default function Product({ product }) {
    const [inputType, setInputType] = useState('input')

    const handleInter = () => {
        setInputType('button')
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h5" component="div">
                        {product.title} - {product.price}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {product.category}
                    </Typography>
                </CardContent>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
                >
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
            <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                style={{
                    height: '25rem',
                    width: 'auto',
                }}
            />

            <CardActions
                handleInter={handleInter}
                sx={{ justifyContent: 'space-between' }}
            >
                {inputType === 'input' ? (
                    <ButtonActions
                        product={product}
                        handleInter={handleInter}
                    />
                ) : (
                    <Link to="/cart" style={{ width: '100%' }}>
                        <Button>Purchase</Button>
                    </Link>
                )}
            </CardActions>
        </Card>
    )
}
