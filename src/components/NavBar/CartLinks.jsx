import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, Box, Popper, Fade, Paper } from '@mui/material'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state'
import AccountCircle from '@mui/icons-material/AccountCircle'
import CartWidget from '../CartWidget/CartWidget'

function CartLinks({ menuId, handleProfileMenuOpen }) {
    //  const popupState = usePop

    return (
        <>
            <PopupState variant="popper" popupId="cart">
                {(popupState) => (
                    <div>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="cart"
                            aria-haspopup="true"
                            color="inherit"
                            variant="contained"
                            {...bindToggle(popupState)}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                        <Popper
                            placement="bottom-end"
                            {...bindPopper(popupState)}
                            transition
                        >
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                        <CartWidget />
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </div>
                )}
            </PopupState>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </Box>
        </>
    )
}

export default CartLinks
