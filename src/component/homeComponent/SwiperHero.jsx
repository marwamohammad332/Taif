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
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2,1fr)'
                        },
                        px: 8,
                        color: '#fff',
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
                                color: '#B34045',
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
                                color: '#0E1D29'
                            }}>
                                Up to 40% Off

                            </Typography>
                            <Typography variant='p' sx={{
                                maxWidth: '385px',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0.21px',
                                color: '#42474D',
                            }}>
                                Curated essentials for babies, children, and parents across all
                                seasonal favorites.
                            </Typography>
                            <Button variant="contained" sx={{
                                mt: 3,
                                width: 'fit-content',
                                background: '#B34045',
                                color: '#ffffff',
                                fontSize: '12px',
                                lineHeight: '20px',
                                letterSpacing: '0.21px',
                                py: '12px',
                                px: '24px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Shop all offers
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
                                color: '#c6d0dc'
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
