import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'

import { Link } from 'react-router'

export default function ProductCard({product}) {

  return (
    <>
    <Card sx={{
      '&:hover': { transform: 'scale(1.05)' },
        transition: 'transform 0.3s',
         borderRadius: 3,
         p:2,
         boxShadow: 1,
         backgroundColor: 'navBackground.main',
    }}>
      <CardActionArea component={Link} to={`/Products/${product.id}`}>
        <CardMedia component={'img'} image={product.image} alt={product.name} sx={{
         
        }}/>
        <CardContent>
          <Typography sx={{
            color:'primary.darker'
          }}>
            {product.name}
          </Typography>
         
          <Typography variant='h6' sx={{
            color:'primary.main'
          }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}
