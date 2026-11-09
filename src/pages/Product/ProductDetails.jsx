import React from 'react'
import useProduct from '../../hooks/useProduct'
import { Alert, Box, Button, Card, CardMedia, Chip, CircularProgress, Divider, Rating, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import ReviewItem from '../../component/Products/ReviewItem';
import useAddToCart from '../../hooks/useAddToCart';
import { useAuthStore } from '../../store/useAuthStore';
import { Slide, toast } from 'react-toastify';

export default function ProductDetails() {
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate: addToCart, isPending: addToCartPending } = useAddToCart();
  const { data, isPending, isError } = useProduct(id);
  if (isPending) return <CircularProgress />
  if (isError) return <Alert severity='error'>
    Faild to Load product details
  </Alert>
  const inStock = data.quantity > 0;

  const handeleAddToCart = () => {
    if (!token) {
      navigate('/Login')
      return;
    }
    addToCart(data.id, {
      onSuccess: () => {
        toast.info('Added to cart !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        Position
      },
      onError: (error) => {
        console.log(error)
      }
    });
  }


  return (
    <>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr'
        },
        gap: 4
      }}>

        <Card>
          <CardMedia component={'img'} image={data.image} sx={{
            maxHeight: 400,
            objectFit: 'contain'
          }} />
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
          <Button variant='contained'
            onClick={() => handeleAddToCart()}
            disabled={!inStock || addToCartPending}>
            Add to cart
          </Button>
        </Box>

      </Box>
      <Divider sx={{
        mt: 3,
        mb: 3,
        borderBottomWidth: 3
      }} />

      {data.reviews.map((review) =>
        <ReviewItem review={review} />
      )}
    </>
  )
}
