import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import useClearCart from '../../hooks/useClearCart';

export default function HeaderBar() {
    const { mutate: clearCart} = useClearCart();
        const handleClearCart = () => {
           clearCart(), {
                       onSuccess: () => {
                           toast.success('Cart was cleared');
                       },
                       onError: () => {
                           toast.error('Failed to clear cart');
                       }
                   }
        }
   
    return (
        <>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <Box>
                    <Typography variant='h3' sx={{
                       
                    }}>
                        Your Shopping Cart
                    </Typography>
                </Box>
                <Box>
                    <Button onClick={handleClearCart} sx={{
                        display:'flex',
                        alignItems:'center',
                        gap:'4px',
                        color:'#573F3D'
                    }}>
                        <DeleteSweepOutlinedIcon />
                        <span>
                          Clear cart   
                        </span>
                       
                    </Button>
                </Box>
            </Box>
        </>
    )
}
