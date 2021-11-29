import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function NavLinks() {
    //TODO: get categories from fakeapi and populate dynamically

    return (
        <>
            <Link
                to="/category/electronics"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
                <Box sx={{ mr: '1rem', display: { xs: 'none', md: 'flex' } }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Electronics
                    </Typography>
                </Box>
            </Link>
            <Link
                to="/category/jewelery"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
                <Box sx={{ mr: '1rem', display: { xs: 'none', md: 'flex' } }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Jewelery
                    </Typography>
                </Box>
            </Link>
        </>
    )
}

export default NavLinks
