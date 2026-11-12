import { Box, Button, Container, Typography } from '@mui/material'
import Products from '../Products/Products';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import React from 'react'

export default function ProductSection() {
    return (
        <>
            <Box sx={{
                backgroundColor: 'secondary.main'
            }}>
                <Container sx={{
                    py: 4
                }}>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'flex-end',
                        mb:3
                    }}>
                        <Box sx={{
                            color:'primary.main'
                        }}>
                            <Typography sx={{
                                display:'flex',
                                alignItems:'center',
                                gap:0.5,
                                mb:0.5
                            }}>
                                <StarsOutlinedIcon />
                                HANDPICKED FAVORITES
                            </Typography>
                            <Typography variant='h3'>
                                Featured Products
                            </Typography>
                        </Box>
                        <Box>
                            <Button>
                                All Picks
                            </Button>
                             <Button>
                                Best Sellers
                            </Button>
                             <Button>
                                New Arrivals
                            </Button>
                        </Box>
                    </Box>
                    <Products />
                </Container>
            </Box>
        </>
    )
}
