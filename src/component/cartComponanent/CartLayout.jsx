import React from 'react'
import useCart from '../../hooks/useCart'
import { useAuthStore } from '../../store/useAuthStore';
import { Alert, Box, Button, CircularProgress, Divider, Paper, Typography } from '@mui/material';
import { Link } from 'react-router'
import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function CartLayout() {

   
    const {data,isPending,isError} = useCart();

    if (isPending){
        <CircularProgress />
    }
    if(isError){
        return<Alert severity='error'>Failed to load cart items</Alert>
    }
    if(data?.items.length === 0){
        return(
            <Box >
                <Typography>
                    your cart is empty
                </Typography>
            </Box>
        )
    }
    console.log(data)
  return (
    <Box sx={{
        display:'grid',
        gridTemplateColumns:{
            xs:'1fr',
            md:'2fr 1fr',
            gap:3
        }
    }}>
        <Paper sx={{
            p:3
        }}>
            <Box sx={{
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Typography variant='body2' sx={{
                flex:2
            }}>
                PRODUCT DETAILS
            </Typography>
             <Typography variant='body2' sx={{
              flex:1,
              textAlign:'center'
            }}>
                UNIT PRICE
            </Typography>
             <Typography variant='body2' sx={{
                flex:1,
                textAlign:'center'
            }}>
                QUANTITY
            </Typography>
             <Typography variant='body2' sx={{
              flex:1,
              textAlign:'center'
            }}>
                SUBTOTAL
            </Typography>
            <Typography variant='body2' sx={{
              width:'50px',
              textAlign:'center'
            }}>
                   
            </Typography>
            
            
            
        </Box>
        
        <Box>
            {data?.items.map((item)=>(
                <CartItem item={item} />
            ))} 
        </Box>
           
        </Paper>
        <Box>
            <CartSummary total={data?.cartTotal} />
        </Box>
    </Box>
    
  )
}
