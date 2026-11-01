import React from 'react'
import useProduct from '../../hooks/useProduct'
import { Alert, Box, CircularProgress } from '@mui/material';

export default function ProductDetails() {
  const {data,isPending, isError} = useProduct(id);
  if (isPending) return <CircularProgress/>
  if (isError) return <Alert severity='error'>
    Faild to Load product details
  </Alert>
  const inStock = data.quantity > 0;


  return (
    <>
    <Box sx={{
      display:'grid',
      
    }}>

    </Box>
    </>
  )
}
