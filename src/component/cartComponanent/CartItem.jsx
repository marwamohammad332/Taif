import { Box, Divider, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import useUpdateCartItem from '../../hooks/useUpdateCartItem';



export default function CartItem({ item }) {
    const { mutate:updateCartItem,isPending }= useUpdateCartItem();
    const handleIncrease = ()=> {
        updateCartItem({productId:item.productId , count:item.count + 1})
    }
    const handleDecrease = ()=> {
        updateCartItem({productId:item.productId , count:item.count - 1})
    }
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
            <Box sx={{
              flex:1,
              justifyContent:'center',
              display:'flex',
              gap:1,
              alignItems:'center',
              p:'4px',
              background:'#EDF4FF',
              borderRadius:'9999px',
              
            }}>
                <IconButton onClick={handleDecrease} disabled={isPending || item.count == 1} >
                    -
                </IconButton>
                <Typography sx={{
                    fontSize:'14px',
                    lineHeight:'20px',
                    fontWeight:'500'
                }}>
                {item.count}
            </Typography>
            <IconButton onClick={handleIncrease} disabled={isPending }>
                   +
                </IconButton>
            </Box>
            
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
