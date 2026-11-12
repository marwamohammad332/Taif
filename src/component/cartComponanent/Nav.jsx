import { Box, Container } from '@mui/material'
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
}
export default function Nav() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} style={{
      fontSize:'12px',
      fontWeight:'500',
      lineHeight:'16px',
      letterSpacing:'0.36px',
      color:'#42474D'
    }}>
      Home
    </Link>,

    <Typography key="3" sx={{ color: 'text.primary' }} style={{
      fontSize:'12px',
      fontWeight:'700',
      lineHeight:'16px',
      letterSpacing:'0.36px',
      color:'#264764'
    }}>
      Shopping Cart
    </Typography>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}  style={{
      fontSize:'12px',
      fontWeight:'500',
      lineHeight:'16px',
      letterSpacing:'0.36px',
      color:'#42474D'
    }}
    >
      Delivery & Details
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick} style={{
      fontSize:'12px',
      fontWeight:'500',
      lineHeight:'16px',
      letterSpacing:'0.36px',
      color:'#42474D'
    }}
    >
      Payment
    </Link>
  ];
  return (
    <>
      
        <Stack spacing={2} >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb" 
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      

    </>
  )
}