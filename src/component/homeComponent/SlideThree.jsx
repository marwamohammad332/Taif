import React from 'react'
import man from '../../imges/man.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Typography } from '@mui/material';

export default function SlideThree() {
    return (
        <>
            <Box sx={{
                height: 500,
                display: 'flex',
                alignItems: 'center',
                px: 8,
                color: "white.main",
                borderRadius: '24px',
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0) 80%), url(${man})`,
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
                            MEN'S COLLECTION
                        </Typography>
                    </Box>
                    <Typography variant="h3" sx={{
                        fontSize: '48px',
                        lineHeight: '48px',
                        maxWidth: '360px',
                        letterSpacing: '-1.2px',
                        fontWeight: '700'
                    }}>
                        Effortless Style for
                        Him
                    </Typography>
                    <Typography variant='p' sx={{
                        maxWidth: '385px',
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0.21px',
                        color: 'white.light',
                    }}>
                        Washed linen shirts and relaxed everyday pieces.
                    </Typography>
                    <Button variant="contained" sx={{
                        mt: 3,
                        width: 'fit-content',
                        backgroundColor: 'primary.lighter',
                        color: 'primary.darker',
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0.21px',
                        py: '12px',
                        px: '24px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        '&:hover': { backgroundColor: 'primary.hover' },
                        transition: 'transform 0.5s',
                    }}>
                        Shop men's wear
                        <ArrowForwardIcon fontSize="small" />
                    </Button>
                </Box>

            </Box>
        </>
    )
}
