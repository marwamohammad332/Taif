import React from 'react'
import babyoverall from '../../imges/babyoverall.webp'
import bodyWash from '../../imges/bodyWash.webp'
import manshirt from '../../imges/manshirt.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Typography } from '@mui/material';
export default function SlideTwo() {
    return (
        <>
            <Box sx={{
                height: 500,
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    md: 'repeat(2,1fr)'
                },
                px: 8,
                color: 'white',
                borderRadius: '24px',
                backgroundImage: `linear-gradient(180deg, #EDF4FF 0%, #E2EFFF 100%)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: '24px',
                position: 'relative',

            }}>
                <Box sx={{
                    position: 'relative',
                    width: { xs: '100%', md: '50%' },
                    height: { xs: 260, md: 'auto' },
                    mt: { xs: 4, md: 0 },
                }}>
                    <Box component={'img'} src={manshirt} alt='Man blue shirt' sx={{
                        position: 'absolute',
                        zIndex: 1,
                        right: { xs: '5%', md: '-170px' },
                        bottom: { xs: '90px', md: '166.2px' },
                        borderRadius: '16px',
                        border: '2px solid #ffffff',
                        transform: 'rotate(6deg)',
                        width: { xs: '100px', md: '150px' },
                        height: { xs: '150px', md: '190px' },
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'rotate(0deg) scale(1.05)' },
                    }}></Box>
                    <Box component={'img'} src={babyoverall} alt='baby blue overall' sx={{
                        position: 'absolute',
                        zIndex: 2,
                        right: { xs: '55%', md: '-10px' },
                        bottom: { xs: '40px', md: '80px' },
                        borderRadius: '16px',
                        border: '2px solid #ffffff',
                        transform: 'rotate(-6deg)',
                        width: { xs: '100px', md: '150px' },
                        height: { xs: '150px', md: '190px' },
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'rotate(0deg) scale(1.05)' },
                    }}></Box>
                    <Box component={'img'} src={bodyWash} alt='baby blue overall' sx={{
                        position: 'absolute',
                        zIndex: 9,
                        right: { xs: '30%', md: '-100px' },
                        bottom: { xs: '60px', md: '120px' },
                        borderRadius: '16px',
                        border: '2px solid #ffffff',
                        width: { xs: '100px', md: '150px' },
                        height: { xs: '150px', md: '190px' },
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                    }}></Box>

                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                }}>


                    <Typography sx={{
                        width: 'fit-content',
                        color: 'warning.main',
                        fontSize: '12px'
                    }}>
                        SEASONAL EVENT
                    </Typography>

                    <Typography variant="h3" sx={{
                        fontSize: '48px',
                        lineHeight: '48px',
                        maxWidth: '360px',
                        letterSpacing: '-1.2px',
                        fontWeight: '700',
                        color: 'primary.darker'
                    }}>
                        Up to 40% Off

                    </Typography>
                    <Typography variant='p' sx={{
                        maxWidth: '385px',
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0.21px',
                        color: 'tertiary.main',
                    }}>
                        Curated essentials for babies, children, and parents across all
                        seasonal favorites.
                    </Typography>
                    <Button variant="contained" sx={{
                        mt: 3,
                        width: 'fit-content',
                        backgroundColor: 'warning.main',
                        color: 'white',
                        fontSize: '12px',
                        lineHeight: '20px',
                        letterSpacing: '0.21px',
                        py: '12px',
                        px: '24px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        '&:hover': { backgroundColor:'warning.hover' },
                        transition: 'transform 0.5s',
                    }}>
                        Shop all offers
                        <ArrowForwardIcon fontSize="small" />
                    </Button>
                </Box>

            </Box>
        </>
    )
}
