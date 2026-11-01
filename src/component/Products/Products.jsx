import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Alert, Box, CircularProgress } from '@mui/material';
import ProductCard from './ProductCard';



export default function Products() {
    const {data,isPending,isError} = useProducts();
    if (isPending) return <CircularProgress />
    if (isError) return <Alert severity='error'>
        Failed to load products
    </Alert>
    console.log(data)
  return (
    <>
    <Box sx={{
        display:'grid',
        gridTemplateColumns:{
            xs:'repeat(2,1fr)',
            sm:'repeat(3,1fr)',
            md:'repeat(4,1fr)',
        },
        gap:'24px'
    }}>
        {data.map((product)=>(
            <ProductCard product={product} />
        ))}

    </Box>
    </>
  )
}
