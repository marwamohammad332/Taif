import React from 'react'
import useProduct from '../../hooks/useProduct'
import { Alert, Box, Button, Card, CardMedia, Chip, CircularProgress, Divider, Rating, Typography } from '@mui/material';
import { useParams } from 'react-router';
import ReviewItem from '../../component/Products/ReviewItem';

export default function ProductDetails() {
  const {id} = useParams();
  console.log(id);
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
      gridTemplateColumns:{
        xs:'1fr',
        md:'1fr 1fr'
      },
      gap:4
    }}>
     
      <Card>
        <CardMedia component={'img'} image={data.image} sx={{
          maxHeight:400,
          objectFit:'contain'
        }}/>
      </Card>
      <Box>
        <Typography>
          {data.name}
        </Typography>
        <Rating value={data.rate} readOnly></Rating>
        <Typography variant='h4' color='primary'>
          ${data.price}
        </Typography>
        <Chip label={inStock ? "In Stock" : "Out of Stock"}
        color={inStock > 0 ? 'success' : 'error'}></Chip>
        <Typography>
          {data.description}
        </Typography>
        <Button variant='contained' disabled={!inStock}>
          Add to cart
        </Button>
      </Box>

    </Box>
    <Divider sx={{
      mt:3,
      mb:3,
      borderBottomWidth:3
    }}/>
    
    {data.reviews.map( (review)=> 
    <ReviewItem review={review} />
    )}
    </>
  )
}
