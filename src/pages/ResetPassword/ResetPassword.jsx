
import { Box, Container, IconButton, Button, InputAdornment, TextField, Typography, Checkbox, Link, Alert } from '@mui/material'
import { Navigate, Link as RouterLink, useLocation, useNavigate } from 'react-router';
import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LockResetIcon from '@mui/icons-material/LockReset';
import CheckIcon from '@mui/icons-material/Check';
import CircleIcon from '@mui/icons-material/Circle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema, sendCodeSchema } from "../../Validation/authSchemas";
import axios from 'axios';
import { MuiOtpInput } from 'mui-one-time-password-input';




export default function ResetPassword() {

  const navigate = useNavigate()
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState('');


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onChange",
  });


  const password = watch('password', '');

  const confirmPassword = watch('confirmPassword', '');
  const match = confirmPassword && confirmPassword === password;
  const strength = [
    password.length >= 8,
    /[A-Z]/.test(password) && /[a-z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong password'];
  const strengthColors = ['#ddd', '#4C635C', '#4C635C', '#4C635C', '#4C635C'];

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword', data);
      setSuccess(true);
      navigate('/Login', { state: { email: data.email } });
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
                Reset Password
              </Typography>
              <Typography sx={{ fontSize: '12px', maxWidth: 360, mx: 'auto', textAlign: 'center' }}>
                Enter the 6-digit code we sent to your email and
                choose a new password.
              </Typography>
            </Box>
            {serverError ? <Alert severity="error" sx={{ mb: 2, width: '100%' }}>{serverError}</Alert> : null}

            <Box component={'form'}
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: '100%', mx: 'auto', mb: '24px' }}>
              <Box sx={{ width: '100%', borderRadius: '12px', background: '#EDF4FF', p: 2, boxSizing: 'border-box' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '12px' }}>
                  <Typography sx={{ fontSize: '11px', color: '#4C635C', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700' }}>
                    <CircleIcon sx={{ fontSize: '11px' }} /> STEP 2 • VERIFICATION
                  </Typography>
                  <Typography sx={{ fontSize: '11px', color: '#4C635C', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                    <VerifiedUserOutlinedIcon sx={{ fontSize: '11px' }} />
                    Encrypted
                  </Typography>
                </Box>
                <Typography component={'label'} htmlFor='email' variant='body2' sx={{ display: 'block', textAlign: 'left', mb: '4px', color: '#42474D' }} >
                  Enter 4-digit confirmation code
                </Typography>
                <MuiOtpInput
                  value={code}
                  onChange={setCode}
                  length={4}
                  gap={1}
                  TextFieldsProps={{
                    error: !!serverError, size: 'small',
                    slotProps: { htmlInput: { inputMode: 'numeric' } },
                    sx: {

                      py: 1,
                      width: '55px',
                      '& .MuiOutlinedInput-root': {

                        height: '55px',
                        borderRadius: '12px',
                        background: '#fff',
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#0E1D29',
                        '& fieldset': { borderColor: '#E2E8F0' },
                        '& .Mui-focused fieldset': { borderColor: '#0E1D29' },

                      }
                    }
                  }}
                />

              </Box>

              <Box sx={{ width: '100%', mt: '20px', borderRadius: '12px', background: '#EDF4FF', p: 2, boxSizing: 'border-box' }}>
                <Box>
                  <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D', fontWeight: '500' }} >
                    New Password
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
                        background: 'white', borderRadius: '8px', p: '12px', fontSize: '14px',
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
                <Box sx={{ mt: '40px' }}>
                  <Typography variant='body2' sx={{ textAlign: 'left', mt: '16px', mb: '4px', color: '#42474D', fontWeight: '500',
                    display:'flex',justifyContent:'space-between'
                   }}>
                    Confirm Password
                    {match && (
                    <Typography sx={{ fontSize: '12px', color: '#4C635C', mt: '6px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                      Passwords match <CheckIcon sx={{ fontSize: 14 }} />
                    </Typography>
                  )}
                  </Typography>
                  <TextField fullWidth type='password' size='small'
                    placeholder={'\u2022'.repeat(8)}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LockResetIcon sx={{ fontSize: '14px' }} />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'white', borderRadius: '8px', p: '12px', fontSize: '14px',
                        '& fieldset': { border: 'none' },
                      },
                    }}
                    {...register('confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                  />
                  
                </Box>
              </Box>
              <Button type="submit" variant="contained" fullWidth sx={{
                mb: '20px', mt: '24px', backgroundColor: '#3F5F7D', color: 'white', borderRadius: '9999px', py: '14px', fontSize: '14px'
                , fontWeight: 'medium', letterSpacing: '0.35px', textTransform: 'none'
              }}
                endIcon={!isSubmitting && <ArrowForwardIcon sx={{ fontSize: '14px', ml: '8px' }} />}
                disabled={isSubmitting} >
                {isSubmitting ? 'Loading...' : 'Update Password'}
              </Button>
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
