import { Box, Button, Container, Typography } from '@mui/material'
import Products from '../Products/Products';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import React from 'react'
import CategoryCard from '../CategoryCard';
import Categories from '../Categories';

export default function CategoriesSection() {
    return (
        <>
            <Box sx={{
            }}>
                <Container sx={{
                    py: 4
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        mb:3,
                         color:'tertiary.main',
                    }}>
                        <Box>
                            <Typography sx={{
                                display:'flex',
                                alignItems:'center',
                                gap:0.5
                            }}>
                                <CategoryOutlinedIcon />
                                EXPLORE BY NEEDS
                            </Typography>
                            <Typography variant='h3' sx={{
                                color:'primary.main'
                            }}>
                                Shop by Categories
                            </Typography>
                        </Box>
                        <Box sx={{
                            justifyContent: 'end', width: '40%'
                        }}>
                            <Typography variant='body2' sx={{

                            }}>
                                Carefully organized departments ensuring every family member finds
                                everyday warmth, nourishment, and care.
                            </Typography>
                        </Box>
                    </Box>
                    <Categories>
                        {(category) => <CategoryCard category={category} />}
                    </Categories>


                </Container >
            </Box >
        </>
    )
}
