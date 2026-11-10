import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CartItem({ item }) {
    return (
        <>
        
        <Box sx={{
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>

            <Typography sx={{
              flex:2,
              
            }}>
                {item.productName}
            </Typography>
            <Typography sx={{
              flex:1,
              textAlign:'center'

            }}>
                ${item.price}
            </Typography>

            <Typography sx={{
              flex:1,
              textAlign:'center'
            }}>
                {item.count}
            </Typography>
            <Typography sx={{
              flex:1,
              textAlign:'center'
            }}>
                ${item.totalPrice}
            </Typography>
            
        </Box>
        
        </>
        
        
    )
}
