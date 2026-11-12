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
            backgroundColor:"secondary.main",
            py:'16px',
            my:'32px'
        }}>
            < Container sx={{
                
                display:'grid',
                gridTemplateColumns:{
                
                    xs:'repeat(2,1fr)',
                    md:'repeat(4,1fr)'
                },
                alignItems:'center',
                gap:'24px'
            }}>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    gap:'8px'
                }}>
                    <VerifiedUserOutlinedIcon sx={{
                        color:'success.main',
                        borderRadius:'9999px',
                        backgroundColor:'success.light',
                        p:'11px'
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize:'14px',
                            fontWeight:'600',
                            lineHeight:'20px',
                            letterSpacing:'0.14px',
                            color:'primary.darker'
                        }}>
                            100% Guaranteed
                        </Typography>
                        <Typography sx={{
                            fontSize:'12px',
                            lineHeight:'16px',
                            letterSpacing:'0.24px',
                            color:'tertiary.main'
                        }}>
                            Original Authentic Brands
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    gap:'8px'
                }}>
                    <LocalShippingOutlinedIcon sx={{
                        color:'primary.darker',
                        borderRadius:'9999px',
                        backgroundColor:'secondary.darker',
                        p:'11px'
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize:'14px',
                            fontWeight:'600',
                            lineHeight:'20px',
                            letterSpacing:'0.14px',
                            color:'primary.darker'
                        }}>
                            Express Delivery
                        </Typography>
                        <Typography sx={{
                            fontSize:'12px',
                            lineHeight:'16px',
                            letterSpacing:'0.24px',
                            color:'tertiary.main'
                        }}>
                            24-48h Jerusalem & WB
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    gap:'8px'
                }}>
                    <PaymentsOutlinedIcon sx={{
                        color:'tertiary.dark',
                        borderRadius:'9999px',
                        backgroundColor:'success.light',
                        p:'11px'
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize:'14px',
                            fontWeight:'600',
                            lineHeight:'20px',
                            letterSpacing:'0.14px',
                            color:'primary.darker'
                        }}>
                            Cash on Delivery
                        </Typography>
                        <Typography sx={{
                            fontSize:'12px',
                            lineHeight:'16px',
                            letterSpacing:'0.24px',
                            color:'tertiary.main'
                        }}>
                            Pay when you inspect goods
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    gap:'8px'
                }}>
                    <SwapHorizOutlinedIcon sx={{
                        color:'warning.dark',
                        borderRadius:'9999px',
                        backgroundColor:'warning.light',
                        p:'11px'
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize:'14px',
                            fontWeight:'600',
                            lineHeight:'20px',
                            letterSpacing:'0.14px',
                            color:'primary.darker'
                        }}>
                            Effortless Returns
                        </Typography>
                        <Typography sx={{
                            fontSize:'12px',
                            lineHeight:'16px',
                            letterSpacing:'0.24px',
                            color:'tertiary.main'
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
