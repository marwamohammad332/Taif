import React from 'react'
import women from '../../imges/women.webp'
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SlideFour() {
    return (
        <>
            <Box sx={{
                height: 500,
                display: 'flex',
                alignItems: 'center',
                px: 8,
                color: 'white',
                borderRadius: '24px',
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0) 80%), url(${women})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: '24px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                }}>
                    <Box sx={{
                        width: 'fit-content',
                        color: 'primary.light'
                    }}>

                        <Typography>
                            WOMEN'S COLLECTION
                        </Typography>
                    </Box>
                    <Typography variant="h3" sx={{
                        fontSize: '48px',
                        lineHeight: '48px',
                        maxWidth: '360px',
                        letterSpacing: '-1.2px',
                        fontWeight: '700',
                        color: 'primary.lighter'
                    }}>
                        Breezy Linen, Everyday Elegance

                    </Typography>
                    <Typography variant='p' sx={{
                        maxWidth: '385px',
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0.21px',
                        color: 'primary.lighter',
                    }}>
                        Natural linen designs for relaxed style across the whole family.

                    </Typography>
                    <Button variant="contained" sx={{
                        mt: 3,
                        width: 'fit-content',
                        backgroundColor: 'primary.darker',
                        color: 'white',
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0.21px',
                        py: '12px',
                        px: '24px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        '&:hover': { backgroundColor: 'primary.dark' },
                        transition: 'transform 0.5s',
                    }}>
                        Shop women's wear
                        <ArrowForwardIcon fontSize="small" />
                    </Button>
                </Box>

            </Box>
        </>
    )
}
