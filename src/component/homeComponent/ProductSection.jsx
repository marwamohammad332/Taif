import { Box, Button, Container, Typography } from '@mui/material'
import Products from '../Products/Products';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import React from 'react'

export default function ProductSection() {
    return (
        <>
            <Box sx={{
                background: '#EDF4FF'
            }}>
                <Container sx={{
                    py: '32px'
                }}>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'flex-end',
                        mb:'24px'
                    }}>
                        <Box>
                            <Typography>
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
