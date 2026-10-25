import React from 'react'
import Categories from './Categories'
import { AppBar, Box, Container, InputBase, Toolbar, Typography, styled, alpha, IconButton, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';


const Search = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
export default function Navbar() {
  return (

    <AppBar position="static" sx={{ width: '100%', background: '#F7F9FF',color:'#264764', boxShadow: 3, boxShadow: 'none', py: 2 }}>
      <Container maxWidth='lg'>
        <Box sx={{
          display: 'flex',
          alignItems:'center',
          justifyContent:'space-between',
          flexWrap: 'nowrap',
          gap:2,
          width:'100%'
        }}>
          <Toolbar sx={{
            mb: 2
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start'
            }}>
              <Typography variant='h6'>
                TAIF
              </Typography>

              <span style={{color:'#42474D'}}>
                Everything for your family
              </span>
            </Box>
          </Toolbar>
          <Search sx={{
            display: 'flex',
            justifyContent:'space-between',
            flex:1,
            maxWidth:'54%',
            boxShadow:1,
            borderRadius:'9999px',
            px:4

          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for baby care, clothing, essentials..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button sx={{
            px:2,
            alignSelf:'center',
            borderRadius:'9999px',
            background:'#E2EFFF',
            color:'#42474D',
            fontSize:'11px',
            lineHeight:'14px'
          }}>
            All Categories
            </Button>
          </Search>
          
          <Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"

              aria-haspopup="true"

              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

        </Box>
       


        <Box sx={{ px: { xs: 2, md: 4 }, pb: 1, overflowX: 'auto' }}>
          <Categories />
        </Box>
      </Container>

    </AppBar>

  )
}
