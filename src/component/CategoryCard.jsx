import { Box, Typography } from '@mui/material'
import { Link } from 'react-router'
import Clothes from '../imges/Categories/Clothes.webp'
import accessories from '../imges/Categories/accessories.webp'
import BeautyProducts from '../imges/Categories/BeautyProducts.webp'
import Cat9 from '../imges/Categories/Cat9.png'
import electronics from '../imges/Categories/electronics.webp'
import HomeAppli from '../imges/Categories/HomeAppli.webp'
import Mobiles from '../imges/Categories/Mobiles.webp'
import Shoes from '../imges/Categories/Shoes.webp'

const images = {
  6: Clothes,
  9: accessories,
  11: BeautyProducts,
  3: Cat9,
  7: electronics,
  10: HomeAppli,
  5: Mobiles,
  8: Shoes,
}

export default function CategoryCard({ category }) {
  return (
    <Box
      component={Link}
      to={`/Category/${category.id}`}
      sx={{
        textDecoration: 'none',
        width: { xs: 'calc(50% - 12px)', md: 'calc(25% - 18px)' },
        '&:hover img': { transform: 'scale(1.05)' },
      }}
    >
      <Box sx={{ overflow: 'hidden', borderRadius: 3, background: '#F7F9FF' }}>
        <Box
          component="img"
          src={images[category.id]}
          alt={category.name}
          sx={{
            width: '100%',
            aspectRatio: '4 / 3',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.3s',
          }}
        />
      </Box>
      <Typography sx={{ mt: 1.5, fontWeight: 600, fontSize: '16px', color: '#18232c' }}>
        {category.name}
      </Typography>
    </Box>
  )
}