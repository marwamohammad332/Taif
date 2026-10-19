
import { Box, Container, IconButton, Button, InputAdornment, TextField, Typography, Checkbox, Link, Alert } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link as RouterLink, useNavigate } from 'react-router';
import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Divider from '@mui/material/Divider';
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Validation/authSchemas";
import axios from 'axios';


const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export default function Register() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });
  const password = watch('password', '');

  const helper = (name, hint, okMsg) => {
    if (errors[name]) return errors[name].message;
    if (dirtyFields[name] && okMsg) return `✓ ${okMsg}`;
    return hint;
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', data);
      setSuccess(true);
      navigate('/Login');
    } catch (err) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log(err.response);
      setServerError('Registration Failed');
    }
  };
  const strength = [
    password.length >= 8,
    /[A-Z]/.test(password) && /[a-z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong password'];
  const strengthColors = ['#ddd', '#4C635C', '#4C635C', '#4C635C', '#4C635C'];

  return (
    <>
      <Box component={'main'} sx={{ background: '#EDF4FF', minHeight: '100vh', py: { xs: '16px', sm: '32px' } }}>
        <Container maxWidth='sm' sx={{ textAlign: 'center', px: { xs: 2, sm: 3 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', width: '100%',
            maxWidth: 480,
            boxSizing: 'border-box',
            mx: 'auto',
            p: { xs: 2.5, sm: 4 }, background: 'white', mt: '16px', borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'
          }}>
          <Box sx={{ mb: '16px' ,textAlign:'center'}}>
            <Typography variant='h2' component="h1" sx={{ fontWeight: 'bold', mt: { xs: 1, sm: 5 }, fontSize: '24px' }} >
              TAIF
            </Typography>
            <Typography sx={{ fontWeight: 'medium', mt: '2px', fontSize: '12px' }}>
              Everything for your family
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', mb: '24px', width: '100%' }}>
            <Typography variant='h4' component={'h2'} sx={{ fontWeight: 'semibold', fontSize: '24px' }}>
              Create your account
            </Typography>
            <Typography sx={{ fontSize: '12px', maxWidth: 360,mx:'auto',textAlign:'center' }}>
              Join TAIF for exclusive family offers, fast checkout, and order
              tracking
            </Typography>
          </Box>
          {serverError ? <Alert severity="error" sx={{ mb: 2, width: '100%' }}>{serverError}</Alert> : null}
          <Box component={'form'}
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: '100%' }}>
            <Box sx={{ width: '100%', mb: '16px' }}>

              <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                Full Name
              </Typography>
              <TextField fullWidth placeholder='e.g. Layla Mansour' variant='outlined' size='small'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PersonOutlinedIcon sx={{ fontSize: '14px' }} />
                      </InputAdornment>
                    ),
                    endAdornment: dirtyFields.fullName && !errors.fullName ? (
                      <InputAdornment position="end">
                        <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: '#2e7d32' }} />
                      </InputAdornment>
                    ) : null,
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
                {...register('fullName')}
                error={!!errors.fullName}
                helperText={helper('fullName', '', 'Looks good')}
              />

            </Box>
            <Box sx={{ width: '100%', mb: '16px' }}>

              <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                User Name
              </Typography>
              <TextField fullWidth placeholder='e.g. LaylaMansour' variant='outlined' size='small'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AlternateEmailIcon sx={{ fontSize: '14px' }} />
                      </InputAdornment>
                    ),
                    endAdornment: dirtyFields.userName && !errors.userName ? (
                      <InputAdornment position="end">
                        <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: '#2e7d32' }} />
                      </InputAdornment>
                    ) : null,
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
                {...register('userName')}
                error={errors.userName}
                helperText={helper('userName', '', 'Looks good')} />

            </Box>
            <Box sx={{ width: '100%', mb: '16px' }}>

              <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                Email address
              </Typography>
              <TextField fullWidth placeholder='e.g. layla@example.com' variant='outlined' size='small'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <MailOutlinedIcon sx={{ fontSize: '14px' }} />
                      </InputAdornment>
                    ),
                    endAdornment: dirtyFields.email && !errors.email ? (
                      <InputAdornment position="end">
                        <VerifiedOutlinedIcon sx={{ fontSize: 16, color: '#2e7d32' }} />
                      </InputAdornment>
                    ) : null,
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#EDF4FF', borderRadius: '8px', p: '12px', fontSize: '14px',
                    '& fieldset': {
                      border: 'none',
                    }
                  }
                }}
                {...register('email')}
                error={errors.email}
                helperText={helper('email', 'Confirmation and digital receipts will be sent here')} />


            </Box>
            <Box sx={{ width: '100%', mb: '16px' }}>

              <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                Mobile Number
              </Typography>
              <TextField fullWidth placeholder=' 5xx-xxx-xxx' variant='outlined' size='small'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

                          <Typography sx={{ fontSize: '12px' }}>
                            +972
                          </Typography>
                          <Divider orientation='vertical' sx={{ mx: '4px', height: '20px' }} />

                        </Box>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIphoneOutlinedIcon sx={{ fontSize: 16 }} />
                      </InputAdornment>
                    ),
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
                {...register('phoneNumber')}
                error={errors.phoneNumber}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', mt: '4px' }}>
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    textAlign: 'left',
                    ml: '14px',
                    color: errors.phoneNumber ? 'error.main' : '#42474D',
                  }} >
                  {errors.phoneNumber?.message || 'Standard regional format (+970 / +972)'}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem',  ml: '14px', color: '#42474D' }}>
                  For SMS tracking
                </Typography>
              </Box>


            </Box>
            <Box sx={{ width: '100%', mb: '16px' }}>

              <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                Password
              </Typography>
              <TextField fullWidth type='password' placeholder={'\u2022'.repeat(8)} variant='outlined' size='small'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LockOutlinedIcon sx={{ fontSize: '14px' }} />
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
                {...register('password')}
                error={errors.password}
                helperText={errors.password?.message} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '8px' }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#4C635C' }}>
                  Security strength
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: strengthColors[strength] }}>
                  {strengthLabels[strength]}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '8px', mt: '4px' }}>
                {[1, 2, 3, 4].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      height: 4,
                      borderRadius: 2,
                      bgcolor: i <= strength ? strengthColors[strength] : '#ddd',
                    }}
                  />
                ))}
              </Box>

            </Box>


            <FormControlLabel sx={{ mt: '4px', mb: '24px', mx: 0, display: 'flex', gap: '12px', alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%' }}
              control={<Checkbox {...register("terms")} size='small' color='#264764' sx={{ p: 0, mt: '2px', color: '#264764' }} />} label={
                <span style={{ color: '#42474D', display: 'block', fontSize: '12px', lineHeight: '19.5px', textAlign: 'left' }}> I agree to TAIF's{''} <Link style={{ color: '#264764' }} href='#' > Terms of Service</Link>
                  {''} and{''} <Link style={{ color: '#264764' }} href='#'>Privacy Policy</Link>, including family
                  purchase safety rules. </span>
              }
            />
            <Button type="submit" variant="contained" fullWidth sx={{
              mb: '20px', backgroundColor: '#3F5F7D', color: 'white', borderRadius: '9999px', py: '14px', fontSize: '14px'
              , fontWeight: 'medium', letterSpacing: '0.35px', textTransform: 'none'
            }}
              endIcon={!isSubmitting && <ArrowForwardIcon sx={{ fontSize: '14px', ml: '8px' }} />}
              disabled={isSubmitting} >
              {isSubmitting ? 'Loading...' : 'Create account'}
            </Button>
            <Typography sx={{ fontSize: '12px', letterSpacing: '0.24px' }}>
              Already have an account?
              <Link component={RouterLink} to='/Login' sx={{
                ml: '4px', textDecoration: 'none',
                fontWeight: '500', cursor: 'pointer', color: '#264764'
              }}>
                Sign in
              </Link>
            </Typography>
          </Box>

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
