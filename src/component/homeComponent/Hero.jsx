import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Familypc from '../../imges/Familypc.webp'
import man from '../../imges/man.webp'
import women from '../../imges/women.webp'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Button, Container, Typography } from '@mui/material';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';

export default function Hero() {
    return (
        <>
        <Container>
             <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
            >
                <SwiperSlide>
                    <Box sx={{
                        height: 500,
                        display: 'flex',
                        alignItems: 'center',
                        px: 8,
                        color: '#fff',
                        borderRadius: 4,
                        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 60%), url(${Familypc})`,
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
                                background: '#ffffff33'
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
                                color: '#ffffffe6',
                            }}>
                                Olive oil, soft home textiles, and everyday essentials
                                for the whole family, up to 40% off.
                            </Typography>
                            <Button variant="contained" sx={{
                                mt: 3,
                                width: 'fit-content',
                                background: '#ffffff',
                                color: '#0F172A',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0.21px',
                                py: '12px',
                                px: '24px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Shop all offers
                                <ArrowForwardIcon fontSize="small" sx={{

                                }} />
                            </Button>
                        </Box>

                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{
                        height: 500,
                        display: 'flex',
                        alignItems: 'center',
                        px: 8,
                        color: '#fff',
                        borderRadius: 4,
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
                                color: '#7B9BB8'
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
                                color: '#ffffffe6',
                            }}>
                                Washed linen shirts and relaxed everyday pieces.
                            </Typography>
                            <Button variant="contained" sx={{
                                mt: 3,
                                width: 'fit-content',
                                background: '#7B9BB8',
                                color: '#141E27',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0.21px',
                                py: '12px',
                                px: '24px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Shop men's wear
                                <ArrowForwardIcon fontSize="small" />
                            </Button>
                        </Box>

                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{
                        height: 500,
                        display: 'flex',
                        alignItems: 'center',
                        px: 8,
                        color: '#fff',
                        borderRadius: 4,
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
                                color: '#7B9BB8'
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
                                color:'#c6d0dc'
                            }}>
                                Breezy Linen, Everyday Elegance

                            </Typography>
                            <Typography variant='p' sx={{
                                maxWidth: '385px',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0.21px',
                                color: '#A0B2C6cc',
                            }}>
                                Natural linen designs for relaxed style across the whole family.

                            </Typography>
                            <Button variant="contained" sx={{
                                mt: 3,
                                width: 'fit-content',
                                background: '#141E27',
                                color: '#ffffff',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0.21px',
                                py: '12px',
                                px: '24px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Shop women's wear 
                                <ArrowForwardIcon fontSize="small" />
                            </Button>
                        </Box>

                    </Box>
                </SwiperSlide>
            </Swiper>
        </Container>
        <Box sx={{
            background:'#EDF4FF',
            py:'16px',
            my:'32px'
        }}>
            < Container sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                flexWrap:'wrap',
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
