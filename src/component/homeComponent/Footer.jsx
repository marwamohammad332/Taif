import { Avatar, Box, Button, Chip, Container, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { Link } from 'react-router';
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { flushSync } from 'react-dom';
import { useLanguageStore } from '../../store/languageStore';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const language = useLanguageStore((state)=>state.language);
  const toggleLanguage = useLanguageStore((state)=>state.toggleLanguage);
  const {t} = useTranslation();
  return (
    <>
      <Box sx={{
        py: 4,
        backgroundColor: 'footerbg.main'
      }}>
        <Container>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: '1fr 1fr',
              lg:'1fr 1fr 2fr'
            },
            gap:2
          }}>
            <Box sx={{
              display: 'flex', flexDirection: 'column', gap: 1

            }}>
              <Box component={Link} to={'/'} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                textDecoration: 'none',
                color: 'tertiary.main'
              }}>
                <Typography variant='h6' sx={{
                  fontWeight: '500',
                  fontSize: '28px',
                  lineHeight: '36px',
                  color: 'primary.main'
                }}>
                  {t("footer.taif")}
                </Typography>
                <Typography style={{
                  color: "tertiary.main",
                  fontSize: '11px',
                  fontWeight: '500',
                  lineHeight: '14px',
                  letterSpacing: '0.33px'
                }}>
                  Everything for your family
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ maxWidth:{xs:'50%', md:'90%'} }}>
                Curated multi-category household essentials,
                ethical fashion, and authentic care products
                tailored for every generation.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Tooltip title={'our Facebook'}>
                  <IconButton component='a' href='https://www.facebook.com/share/1MXpt7xazx/?mibextid=wwXIfr' target='_blank' aria-label='Facebook'
                    sx={{ borderRadius: '99999', bgcolor: 'secondary.dark' }}>
                    <FacebookOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Our Instagram'}>
                  <IconButton component='a' href='https://www.instagram.com/cordandknot332?cnvx=ZzVua21vcm1vYTh2' target='_blank' aria-label='Instagram'
                    sx={{ borderRadius: '99999', bgcolor: 'secondary.dark' }}>
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={'mail to'}>
                  <IconButton component='a' href='mailto:marwamohammad332@gmail.com' target='_blank' aria-label='Email'
                    sx={{ borderRadius: '99999', bgcolor: 'secondary.dark' }}>
                    <EmailOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant='h5' sx={{
                color: 'text.dark', letterSpacing: '0.009rem'
              }}>
                Quick Links
              </Typography>
              <Stack spacing={1} >
                <Typography variant='body2' component={Link} to={'/Category'} sx={{
                  textDecoration: 'none', color: 'text.primary'
                }}>Shop All Products</Typography>
                <Typography variant='body2' component={Link} to={'/Category'} sx={{
                  textDecoration: 'none', color: 'text.primary'
                }}>New Arrivals</Typography>
                <Typography variant='body2' component={Link} to={'/Category'} sx={{
                  textDecoration: 'none', color: 'text.primary'
                }}>Best Sellers</Typography>
                <Typography variant='body2' component={Link} to={'/Category'} sx={{
                  textDecoration: 'none', color: 'text.primary'
                }}>Offers & Deals</Typography>
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant='h5' sx={{
                color: 'text.dark', letterSpacing: '0.009rem'
              }}>
                Contact & Delivery Info
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                  <Box sx={{
                    borderRadius: 3, px: 2, py: 3, bgcolor: 'secondary.dark'
                  }}>
                    <Box sx={{
                      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <WhatsAppIcon />
                        <Typography variant='body2'>
                          WhatsApp: +972 59-000-0000
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CallOutlinedIcon />
                        <Typography variant='body2'>
                          Support: +972 2-000-0000
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <EmailOutlinedIcon />
                        <Typography variant='body2'>
                          help@taif-family.com
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{
                    borderRadius: 3, px: 2, py: 3, bgcolor: 'secondary.dark',
                    display: 'flex', flexDirection: 'column', gap: 2
                  }}>
                    <Box sx={{
                      display: 'flex', alignItems: 'center', gap: 1
                    }}>
                      <PinDropOutlinedIcon />
                      <Typography variant='body2'>
                        Al-Irsal Street, Ramallah
                      </Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex', alignItems: 'self-start', gap: 1
                    }}>
                      <LocalShippingOutlinedIcon />
                      <Typography variant='body2'>
                        Jerusalem & West Bank express delivery within
                        24-48 hours.
                      </Typography>
                    </Box>


                  </Box>
                </Box>
                <Box sx={{
                  display: 'flex', alignItems: 'center', gap: 1,
                  borderRadius: 3, p: 2, bgcolor: 'secondary.dark'

                }}>
                  <Chip sx={{ bgcolor: 'transparent',bgcolor:'secondary.darker',px:1 }} avatar={<Avatar sx={{ bgcolor: 'transparent' }}><PaymentIcon /></Avatar>} label="Visa" />
                  <Chip sx={{ bgcolor: 'transparent',bgcolor:'secondary.darker',px:1 }} avatar={<Avatar sx={{ bgcolor: 'transparent' }}><PaymentIcon /></Avatar>} label="MasterCard" />
                  <Chip sx={{ bgcolor: 'transparent',bgcolor:'success.light',px:1 }} avatar={<Avatar sx={{ bgcolor: 'transparent' }}><PaymentsOutlinedIcon /></Avatar>} label="Cash on Delivery" />
                  <Chip clickable onClick={toggleLanguage} sx={{ bgcolor: 'transparent',bgcolor:'secondary.darker',borderRadius:10,py:3,px:1,ml:2 }} 
                  avatar={<Avatar sx={{ bgcolor: 'transparent' }}>
                    <TranslateOutlinedIcon />
                    </Avatar>} label={language == "en" ?"عربي":"En"} />
                </Box>
              </Box>

            </Box>
          </Box>
          <Divider sx={{mt:5}} />
          
            <Typography variant='body1' sx={{py:3}}>
              © 2025 TAIF. Everything for your family. All rights reserved.
            </Typography>
          
        </Container>
      </Box>

    </>
  )
}
