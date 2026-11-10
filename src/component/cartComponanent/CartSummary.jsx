import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function CartSummary({total}) {
  return (
    <>
    <Paper sx={{
        p:3,
        display:'flex',
        flexDirection:'column',
        gap:3
    }}>
        <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }}>
        <Typography variant='h5'>
            Order Summary
        </Typography>
        <Typography variant='body2'>
            TAIF Secured
        </Typography>
    </Box>
    <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }}>
        <Typography variant='body2'>
            Subtotal
        </Typography>
        <Box variant='body2' sx={{
            fontWeight:'500',
            color:'#0E1D29'
        }}>
            ${total?.toFixed(2)}
        </Box>

    </Box>
    <Divider /> 
    <Button fullWidth sx={{
        display:'flex',
        alignItems:'center',
        gap:1,
        py:2,
        background:'#264764',
        color:'white',
        borderRadius:'9999px'
        
    }}>
        <LockOutlinedIcon />
        <span>
            Proceed to Checkout
        </span>
    </Button>
    </Paper>
    
    </>
  )
}
