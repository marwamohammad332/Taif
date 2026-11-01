
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Button, Container, Typography } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import SwiperHero from './SwiperHero';

export default function Hero() {
    return (
        <>
        <Container>
           <SwiperHero />
        </Container>
        <Box sx={{
            background:'#EDF4FF',
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
                        color:'#506761',
                        borderRadius:'9999px',
                        background:'#CBE5DC',
                        p:'11px'
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize:'14px',
                            fontWeight:'600',
                            lineHeight:'20px',
                            letterSpacing:'0.14px',
                            color:'#0E1D29'
                        }}>
                            100% Guaranteed
                        </Typography>
                        <Typography sx={{
                            fontSize:'12px',
                            lineHeight:'16px',
                            letterSpacing:'0.24px',
                            color:'#42474D'
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
                        color:'#001D33',
                        borderRadius:'9999px',
                        background:'#CEE5FF',
                        p:'11px'
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize:'14px',
                            fontWeight:'600',
                            lineHeight:'20px',
                            letterSpacing:'0.14px',
                            color:'#0E1D29'
                        }}>
                            Express Delivery
                        </Typography>
                        <Typography sx={{
                            fontSize:'12px',
                            lineHeight:'16px',
                            letterSpacing:'0.24px',
                            color:'#42474D'
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
                        color:'#081F1A',
                        borderRadius:'9999px',
                        background:'#CEE8DF',
                        p:'11px'
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize:'14px',
                            fontWeight:'600',
                            lineHeight:'20px',
                            letterSpacing:'0.14px',
                            color:'#0E1D29'
                        }}>
                            Cash on Delivery
                        </Typography>
                        <Typography sx={{
                            fontSize:'12px',
                            lineHeight:'16px',
                            letterSpacing:'0.24px',
                            color:'#42474D'
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
                        color:'#291715',
                        borderRadius:'9999px',
                        background:'#FEDAD7',
                        p:'11px'
                    }} />
                    <Box>
                        <Typography sx={{
                            fontSize:'14px',
                            fontWeight:'600',
                            lineHeight:'20px',
                            letterSpacing:'0.14px',
                            color:'#0E1D29'
                        }}>
                            Effortless Returns
                        </Typography>
                        <Typography sx={{
                            fontSize:'12px',
                            lineHeight:'16px',
                            letterSpacing:'0.24px',
                            color:'#42474D'
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
