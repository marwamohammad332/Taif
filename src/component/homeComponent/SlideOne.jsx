import React from 'react'
import Familypc from '../../imges/Familypc.webp'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Typography } from '@mui/material';


export default function SlideOne() {
    return (
        <>
            <Box sx={{
                height: 500,
                display: 'flex',
                alignItems: 'center',
                px: 8,
                color: 'white.main',
                borderRadius: '24px',
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 80%), url(${Familypc})`,
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
                        display: 'flex',
                        gap: '6px',
                        alignItems: 'center',
                        px: '12px',
                        py: '4px',
                        borderRadius: '9999px',
                        border: '1px solid #ffffff33',
                        backgroundColor: "white.dark"
                    }}>
                        <LocalOfferOutlinedIcon />
                        <Typography>
                            LIMITED TIME OFFERS
                        </Typography>
                    </Box>
                    <Typography variant="h3" sx={{
                        fontSize: '48px',
                        lineHeight: '48px',
                        maxWidth: '360px',
                        letterSpacing: '-1.2px',
                        fontWeight: '700'
                    }}>
                        Seasonal Family Savings
                    </Typography>
                    <Typography variant='p' sx={{
                        maxWidth: '385px',
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0.21px',
                        color: 'white.light',
                    }}>
                        Olive oil, soft home textiles, and everyday essentials
                        for the whole family, up to 40% off.
                    </Typography>
                    <Button variant="contained" sx={{
                        mt: 3,
                        width: 'fit-content',
                        backgroundColor: 'white.main',
                        color: 'primary.darker',
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0.21px',
                        py: '12px',
                        px: '24px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        '&:hover': { backgroundColor: 'white.hover' },
                        transition: 'transform 0.5s',
                    }}>
                        Shop all offers
                        <ArrowForwardIcon fontSize="small" sx={{

                        }} />
                    </Button>
                </Box>

            </Box>
        </>
    )
}
