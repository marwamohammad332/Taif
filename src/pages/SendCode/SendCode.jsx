
import { Box, Container, IconButton, Button, InputAdornment, TextField, Typography, Checkbox, Link, Alert } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router';
import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {  sendCodeSchema } from "../../Validation/authSchemas";
import axios from 'axios';




export default function SendCode() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(sendCodeSchema),
    mode: "onChange",
  });



  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/SendCode', data);
      setSuccess(true);
      navigate('/ResetPassword', { state: { email: data.email } });
    } catch (err) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log(err.response);
      setServerError('Failed');
    }
  };




  return (
    <>
      <Box component={'main'} sx={{ background: '#EDF4FF', minHeight: '100vh', py: { xs: '16px', sm: '32px' } }}>
        <Container maxWidth='sm' sx={{ textAlign: 'center', px: { xs: 2, sm: 3 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', width: '100%',
            boxSizing: 'border-box',
            mx: 'auto',
            p: { xs: 2.5, sm: 4 }, background: 'white', mt: '16px', borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'
          }}>
            <Box sx={{ mb: '16px', textAlign: 'center' }}>
              <Typography variant='h2' component="h1" sx={{ fontWeight: '700', mt: { xs: 1, sm: 5 }, fontSize: '24px' }} >
                TAIF
              </Typography>
              <Typography sx={{ fontWeight: '500', mt: '2px', fontSize: '12px' }}>
                Everything for your family
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mb: '24px', width: '100%' }}>
              <Typography variant='h4' component={'h2'} sx={{ fontWeight: '600', fontSize: '24px' }}>
                Verification & Security
              </Typography>
              <Typography sx={{ fontSize: '12px', maxWidth: 360, mx: 'auto', textAlign: 'center' }}>
                Enter your registered email to receive a 6-digit verification code.
              </Typography>
            </Box>
            {serverError ? <Alert severity="error" sx={{ mb: 2, width: '100%' }}>{serverError}</Alert> : null}

            <Box component={'form'}
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: '100%', mx: 'auto', mb: '24px' }}>
              <Box sx={{ width: '100%', borderRadius: '12px', background: '#EDF4FF', p: 2, boxSizing: 'border-box' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '12px' }}>
                  <Typography sx={{ fontSize: '11px', color: '#4C635C', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700' }}>
                    <CircleIcon sx={{ fontSize: '11px' }} /> STEP 1 • IDENTIFICATION
                  </Typography>
                  <Typography sx={{ fontSize: '11px', color: '#4C635C', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                    <VerifiedUserOutlinedIcon sx={{ fontSize: '11px' }} />
                    Encrypted
                  </Typography>
                </Box>
                <Typography component={'label'} htmlFor='email' variant='body2' sx={{display:'block', textAlign: 'left', mb: '4px', color: '#42474D' }} >
                  Email
                </Typography>
                <TextField fullWidth placeholder='e.g. name@domain.com' type="email" id='email' autoComplete="email" variant='outlined' size='small'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <MailOutlinedIcon sx={{ fontSize: '14px' }} />
                        </InputAdornment>
                      )
                    }
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      p: '12px',
                      fontSize: '14px',
                      '& fieldset': { border: 'none' },
                      '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active': {
                        WebkitBoxShadow: '0 0 0 100px white inset',
                        WebkitTextFillColor: '#0E1D29',
                        caretColor: '#0E1D29',
                        transition: 'background-color 9999s ease-in-out 0s',
                      },
                    },
                  }}
                  {...register('email')}
                  error={errors.email}
                  helperText={errors.email?.message} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '12px' }}>
                  <Button type="submit" variant="contained" sx={{
                    mb: '20px', backgroundColor: '#CBE5DC', color: '#506761', borderRadius: '9999px', py: '10px', fontSize: '14px'
                    , fontWeight: 'medium', letterSpacing: '0.35px', textTransform: 'none'
                  }}
                    startIcon={!isSubmitting && <SendOutlinedIcon sx={{ fontSize: '14px', ml: '8px' }} />}
                    disabled={isSubmitting} >
                    {isSubmitting ? 'Loading...' : 'Send code'}
                  </Button>
                </Box>
              </Box>
            </Box>
            <Link component={RouterLink} to='/Login' sx={{
                            ml: '4px', textDecoration: 'none',
                            fontWeight: '500', cursor: 'pointer', color: '#264764',
                            fontSize:'14px',mt:'45px'
                          }}>
                            Back to Sign in
                          </Link>
            <Divider sx={{ my: '16px', borderColor: '#DBEAFB', alignSelf: 'stretch' }} />
            <Button startIcon={<LanguageIcon sx={{ fontSize: '12px', color: '#42474D' }} />}
              sx={{ display: 'flex', mx: 'auto', textTransform: 'none', color: '#42474D', fontSize: '12px' }}>
              العربية | English
            </Button>

          </Box>
        </Container >
      </Box >

    </>
  )
}
