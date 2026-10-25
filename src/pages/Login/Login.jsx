
import { Box, Container, IconButton, Button, InputAdornment, TextField, Typography, Checkbox, Link, Alert } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link as RouterLink, useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Divider from '@mui/material/Divider';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Validation/authSchemas";
import axios from 'axios';




export default function Login() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });



  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', data);
      const token = response.data.accessToken
; 
      console.log(response.data);

      if (rememberMe) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }
      setSuccess(true);
      navigate('/');
    } catch (err) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log(err.response);
      setServerError('Login Failed');
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
            maxWidth: 480,
            boxSizing: 'border-box',
            mx: 'auto',
            p: { xs: 2.5, sm: 4 }, background: 'white', mt: '16px', borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'
          }}>
            <Box sx={{ mb: '16px', textAlign: 'center' }}>
              <Typography variant='h2' component="h1" sx={{ fontWeight: 'bold', mt: { xs: 1, sm: 5 }, fontSize: '24px' }} >
                TAIF
              </Typography>
              <Typography sx={{ fontWeight: 'medium', mt: '2px', fontSize: '12px' }}>
                Everything for your family
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mb: '24px', width: '100%' }}>
              <Typography variant='h4' component={'h2'} sx={{ fontWeight: 'semibold', fontSize: '24px' }}>
                Welcome back
              </Typography>
              <Typography sx={{ fontSize: '12px', maxWidth: 360, mx: 'auto', textAlign: 'center' }}>
                Sign in to manage your orders and saved items
              </Typography>
            </Box>
            {serverError ? <Alert severity="error" sx={{ mb: 2, width: '100%' }}>{serverError}</Alert> : null}

            <Box component={'form'}
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: '100%' }}>


              <Box sx={{ width: '100%', mb: '16px' }}>

                <Typography variant='body2' sx={{ textAlign: 'left', mb: '4px', color: '#42474D' }} >
                  Email
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
                  helperText={errors.email?.message} />


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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px',mt:'16px',mb:'16px' }}>
                  <FormControlLabel sx={{ mx: 0, display: 'flex', gap: '12px' }}
                    control={<Checkbox size='small' color='#264764' checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)} sx={{ p: 0, color: '#264764' }} />} label={
                        <Typography style={{ color: '#42474D', display: 'block', fontSize: '12px', lineHeight: '16px', textAlign: 'left' }}>
                          Remember me
                        </Typography>
                      }
                  />
                  <Link
                    component={RouterLink}
                    to="/SendCode"
                    sx={{ whiteSpace: 'nowrap', fontFamily: 'inherit', fontSize: '12px',
                       textDecoration: 'none', color: '#264764', lineHeight: '16px' }}
                  >
                    Forgot password?
                  </Link>
                </Box>


              </Box>



              <Button type="submit" variant="contained" fullWidth sx={{
                mb: '20px', backgroundColor: '#3F5F7D', color: 'white', borderRadius: '9999px', py: '14px', fontSize: '14px'
                , fontWeight: 'medium', letterSpacing: '0.35px', textTransform: 'none'
              }}
                endIcon={!isSubmitting && <ArrowForwardIcon sx={{ fontSize: '14px', ml: '8px' }} />}
                disabled={isSubmitting} >
                {isSubmitting ? 'Loading...' : 'Sign in'}
              </Button>
              <Button type="button" variant="contained" fullWidth
                onClick={() => navigate('/')}
                sx={{
                  mb: '20px', backgroundColor: '#CBE5DC', color: '#506761', borderRadius: '9999px', py: '14px', fontSize: '14px'
                  , fontWeight: 'medium', letterSpacing: '0.35px', textTransform: 'none'
                }}
              >
                {isSubmitting ? 'Loading...' : 'Continue as guest'}
              </Button>
              <Typography sx={{ fontSize: '12px', letterSpacing: '0.24px' }}>
                Don't have an account?
                <Link component={RouterLink} to='/Register' sx={{
                  ml: '4px', textDecoration: 'none',
                  fontWeight: '500', cursor: 'pointer', color: '#264764'
                }}>
                  Create one
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
