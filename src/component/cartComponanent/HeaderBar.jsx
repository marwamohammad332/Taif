import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

export default function HeaderBar() {
   
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
                    <Button sx={{
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
