import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

export default function ProductCard({product}) {
  return (
    <>
    <Card>
      <CardActionArea component={Link} to={`/Products/${product.id}`}>
        <CardMedia component={'img'} image={product.image} alt={product.name}/>
        <CardContent>
          <Typography>
            {product.name}
          </Typography>
         
          <Typography variant='h6' color='#264764'>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}
