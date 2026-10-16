
import { Box, Container, IconButton,Button, InputAdornment, TextField, Typography, Checkbox,Link } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link as RouterLink} from 'react-router';
import React from 'react'
import ArrowForwardIcon from'@mui/icons-material/ArrowForward'
import Divider from '@mui/material/Divider';
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { useForm } from "react-hook-form"

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <>
      <Box component={'main'} sx={{ background: '#EDF4FF', minHeight: '100vh', py: '32px' }}>
        <Container sx={{ textAlign: 'center', }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', width: '40%', mx: 'auto', p: 4, background: 'white', mt: '16px', borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'
          }}>
            <Box sx={{ width: 'fit', mb: '16px' }}>
              <Typography variant='h2' component="h1" sx={{ fontWeight: 'bold', mt: 5, fontSize: '24px' }} >
                TAIF
              </Typography>
              <Typography sx={{ fontWeight: 'medium', mt: '2px', fontSize: '12px' }}>
                Everything for your family
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mb: '24px', width: '74%' }}>
              <Typography variant='h4' component={'h2'} sx={{ fontWeight: 'semibold', fontSize: '24px' }}>
                Create your account
              </Typography>
              <Typography sx={{ fontSize: '12px' }}>
                Join TAIF for exclusive family offers, fast checkout, and order
                tracking
              </Typography>
            </Box>
            <Box component={'form'}>
              <Box sx={{ width: '100%', mb: '16px' }}>
              
                <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                  Full Name
                </Typography>
                <TextField fullWidth placeholder='e.g. Layla Mansour' variant='outlined' size='small'
                slotProps={{
                  input:{
                    startAdornment:(
                      <InputAdornment position='start'>
                        <PersonOutlinedIcon sx={{fontSize:'14px'}}/>
                      </InputAdornment>
                    )
                  }
                }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: '#EDF4FF', borderRadius: '8px', p: '12px', fontSize: '14px',
                      '& fieldset': {
                        border: 'none',
                      }
                    }
                  }}
                  {...register('fullName')} />
              
            </Box>
             <Box sx={{ width: '100%', mb: '16px' }}>
              
                <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                  User Name
                </Typography>
                <TextField fullWidth placeholder='e.g. LaylaMansour' variant='outlined' size='small'
                slotProps={{
                  input:{
                    startAdornment:(
                      <InputAdornment position='start'>
                        <AlternateEmailIcon sx={{fontSize:'14px'}}/>
                      </InputAdornment>
                    )
                  }
                }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: '#EDF4FF', borderRadius: '8px', p: '12px', fontSize: '14px',
                      '& fieldset': {
                        border: 'none',
                      }
                    }
                  }}
                  {...register('userName')} />
              
            </Box>
            <Box sx={{ width: '100%', mb: '16px' }}>
              
                <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                  Email address
                </Typography>
                <TextField fullWidth placeholder='e.g. layla@example.com' variant='outlined' size='small'
                slotProps={{
                  input:{
                    startAdornment:(
                      <InputAdornment position='start'>
                        <MailOutlinedIcon sx={{fontSize:'14px'}}/>
                      </InputAdornment>
                    )
                  }
                }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#EDF4FF', borderRadius: '8px', py: '12px', fontSize: '14px',
                      '& fieldset': {
                        border: 'none',
                      }
                    }
                  }} 
                   {...register('email')}/>
              

            </Box>
            <Box sx={{ width: '100%', mb: '16px' }}>
              
                <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                  Mobile Number
                </Typography>
                <TextField fullWidth placeholder='e.g. 5xx-xxx-xxx' variant='outlined' size='small'
                slotProps={{
                  input:{
                    startAdornment:(
                      <InputAdornment position='start'>
                        <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                        
                            <Typography sx={{fontSize:'12px'}}>
                              +972
                            </Typography>
                            <Divider orientation='vertical'  sx={{mx:'4px', height:'20px'}}/>
                        
                        </Box>
                      </InputAdornment>
                    )
                  }
                }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: '#EDF4FF', borderRadius: '8px', p: '12px', fontSize: '14px',
                      '& fieldset': {
                        border: 'none',
                      }
                    }
                  }} 
                  {...register('phoneNumber')} />
              

            </Box>
            <Box sx={{ width: '100%', mb: '16px' }}>
              
                <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                  Password
                </Typography>
                <TextField fullWidth type='password' placeholder={'\u2022'.repeat(8)} variant='outlined' size='small'
                slotProps={{
                  input:{
                    startAdornment:(
                      <InputAdornment position='start'>
                        <LockOutlinedIcon sx={{fontSize:'14px'}}/>
                      </InputAdornment>
                    )
                  }
                }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      background: '#EDF4FF', borderRadius: '8px', p: '12px', fontSize: '14px',
                      '& fieldset': {
                        border: 'none',
                      }
                    }
                  }}
                   {...register('password')}  />
              
            </Box>
            
           
            <FormControlLabel sx={{mt:'4px',mb:'24px' ,mx:'2px', display:'flex',gap:'12px' ,alignItems:'flex-start',justifyContent:'flex-start' ,width:'100%'}}
              control={<Checkbox size='small' color='#264764' sx={{p:0,mt:'2px', color: '#264764' }} />} label={
              <span style={{color:'#42474D',display:'block' ,fontSize:'12px', lineHeight:'19.5px',textAlign:'left'}}> I agree to TAIF's{''} <Link style={{color:'#264764'}} href='#' > Terms of Service</Link>
               {''} and{''} <Link style={{color:'#264764'}} href='#'>Privacy Policy</Link>, including family
purchase safety rules. </span> 
               }
            />
            <Button variant="contained" fullWidth sx={{mb:'20px', backgroundColor:'#3F5F7D',color:'white',borderRadius:'9999px',py:'14px',fontSize:'14px'
              ,fontWeight:'medium',letterSpacing:'0.35px',textTransform:'none'
            }}
            endIcon={<ArrowForwardIcon sx={{fontSize:'14px' ,ml:'8px'}}/>}
            >
              Create account
              </Button>
              <Typography sx={{fontSize:'12px' , letterSpacing:'0.24px'}}>
                Already have an account?
                <Link component={RouterLink} to='/Login' sx={{ml:'4px',textDecoration:'none',fontWeight:'500',cursor:'pointer'}}>
                Sign in
                </Link> 
              </Typography>
            </Box>
           
              <Divider sx={{my:'16px', borderColor:'#DBEAFB' ,alignSelf:'stretch'}} />
              <Button startIcon={<LanguageIcon sx={{fontSize:'12px', color:'#42474D'}} />}
              sx={{display:'flex',mx:'auto',textTransform:'none',color:'#42474D',fontSize:'12px' }}>
              العربية | English
              </Button>
              
          </Box>
        </Container>
      </Box>

    </>
  )
}
