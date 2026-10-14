import { Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Register() {
  return (
    <>
    <Box component={'main'} sx={{background:'#EDF4FF',minHeight:'100vh',py:'32px'}}>
      <Container sx={{textAlign:'center',}}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',width:'40%',mx:'auto', p:4, background:'white',mt:'16px',borderRadius:'12px',
          boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'
        }}>
          <Box sx={{ width: 'fit', mb:'16px' }}>
            <Typography variant='h2' component="h1" sx={{ fontWeight: 'bold', mt: 5 ,fontSize:'24px' }} >
              TAIF
            </Typography>
            <Typography sx={{ fontWeight: 'medium', mt: '2px', fontSize:'12px'}}>
              Everything for your family
            </Typography>
          </Box>
          <Box sx={{textAlign:'center',mb:'24px',width:'74%'}}>
            <Typography variant='h4' component={'h2'} sx={{fontWeight:'semibold',fontSize:'24px'}}>
              Create your account
            </Typography>
            <Typography sx={{fontSize:'12px'}}>
              Join TAIF for exclusive family offers, fast checkout, and order
tracking
            </Typography>
          </Box>
          <Box>
            
          </Box>

        </Box>
      </Container>
    </Box>
      
    </>
  )
}
