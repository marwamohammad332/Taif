import React from 'react'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Familypc from '../../imges/Familypc.webp'
import man from '../../imges/man.webp'
import women from '../../imges/women.webp'
import babyoverall from '../../imges/babyoverall.webp'
import bodyWash from '../../imges/bodyWash.webp'
import manshirt from '../../imges/manshirt.webp'
import { Box, Button, Typography } from '@mui/material';


export default function SwiperHero() {
  return (
    <>
     <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
            >
                <SwiperSlide>
                    <Box sx={{
                        height: 500,
                        display: 'flex',
                        alignItems: 'center',
                        px: 8,
                        color: '#fff',
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
                        display: 'grid',
                        gridTemplateColumns:{
                            xs:'1fr',
                            md:'repeat(2,1fr)'
                        },
                       
                        px: 8,
                        color: '#fff',
                        borderRadius: '24px',
                        backgroundImage: `linear-gradient(180deg, #EDF4FF 0%, #E2EFFF 100%)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        py: '24px',
                        position:'relative'
                        
                    }}>
                        <Box sx={{
                            position:'relative',
                            width:'50%'
                        }}>
                            <Box component={'img'} src={manshirt} alt='Man blue shirt' sx={{
                              position:'absolute',
                              zIndex:'1',
                                right:'-200px',
                                bottom:'166.2px',
                                borderRadius:'16px',
                                border:'2px solid #ffffff',
                                transform:'rotate(6deg)',
                                width:'150px',
                                height:'190px',
                                objectFit:'cover',
                            }}></Box>
                             <Box component={'img'} src={babyoverall} alt='baby blue overall' sx={{
                              position:'absolute',
                              zIndex:'2',
                                right:'50.8px',
                                bottom:'87.5px',
                                borderRadius:'16px',
                                border:'2px solid #ffffff',
                                transform:'rotate(-6deg)',
                                width:'150px',
                                height:'190px',
                                objectFit:'cover',
                            }}></Box>
                             <Box component={'img'} src={bodyWash} alt='baby blue overall' sx={{
                              position:'absolute',
                              zIndex:'9',
                                top:'50%',
                                left:'50%',
                                mx:'auto',
                                borderRadius:'16px',
                                border:'2px solid #ffffff',
                                width:'150px',
                                height:'190px',
                                objectFit:'cover',
                            }}></Box>
                        
                        </Box>
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
                <SwiperSlide>
                    <Box sx={{
                        height: 500,
                        display: 'flex',
                        alignItems: 'center',
                        px: 8,
                        color: '#fff',
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
    </>
  )
}
