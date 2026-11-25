import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
export default function HeroBar() {
    return (
        <>
            <Box sx={{
                backgroundColor: "secondary.main",
                py: '16px',
                my: '32px'
            }}>
                < Container sx={{

                    display: 'grid',
                    gridTemplateColumns: {

                        xs: 'repeat(2,1fr)',
                        md: 'repeat(4,1fr)'
                    },
                    alignItems: 'center',
                    gap: '24px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <Box sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'success.light',
                            borderRadius: '9999px',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <VerifiedUserOutlinedIcon sx={{
                                color: 'success.main'
                            }} />
                        </Box>

                        <Box>
                            <Typography variant='body1' sx={{
                                fontWeight: '600',
                                letterSpacing: '0.14px',
                                color: 'primary.darker'
                            }}>
                                100% Guaranteed
                            </Typography>
                            <Typography variant='body2' sx={{
                            
                                letterSpacing: '0.24px',
                                color: 'tertiary.main'
                            }}>
                                Original Authentic Brands
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                         <Box sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'secondary.darker',
                            borderRadius: '9999px',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <LocalShippingOutlinedIcon sx={{
                                color: 'primary.darker'
                            }} />
                        </Box>
                       
                        <Box>
                            <Typography variant='body1' sx={{
                                fontWeight: '600',
                                letterSpacing: '0.14px',
                                color: 'primary.darker'
                            }}>
                                Express Delivery
                            </Typography>
                            <Typography variant='body2' sx={{
                                letterSpacing: '0.24px',
                                color: 'tertiary.main'
                            }}>
                                24-48h Jerusalem & WB
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <Box sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'success.light',
                            borderRadius: '9999px',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <PaymentsOutlinedIcon sx={{
                                color: 'tertiary.dark'
                            }} />
                        </Box>
                       
                        <Box>
                            <Typography variant='body1' sx={{
                                fontWeight: '600',
                                letterSpacing: '0.14px',
                                color: 'primary.darker'
                            }}>
                                Cash on Delivery
                            </Typography>
                            <Typography variant='body2' sx={{
                                letterSpacing: '0.24px',
                                color: 'tertiary.main'
                            }}>
                                Pay when you inspect goods
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                         <Box sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'warning.light',
                            borderRadius: '9999px',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <SwapHorizOutlinedIcon sx={{
                                color: 'warning.dark'
                            }} />
                        </Box>
                        <Box>
                            <Typography variant='body1' sx={{
                                fontWeight: '600',
                                letterSpacing: '0.14px',
                                color: 'primary.darker'
                            }}>
                                Effortless Returns
                            </Typography>
                            <Typography variant='body2' sx={{
                                letterSpacing: '0.24px',
                                color: 'tertiary.main'
                            }}>
                                Doorstep exchange in 7 days
                            </Typography>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </>
    )
}
