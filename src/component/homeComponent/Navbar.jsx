import React from 'react'
import Categories from '../Categories'
import { AppBar, Box, Container, InputBase, Toolbar, Typography, styled, alpha, IconButton, Button, Chip } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router';
import { useAuthStore } from '../../store/useAuthStore';


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
  
const token =useAuthStore ((state)=>state.token);
const logout =useAuthStore ((state)=>state.logout);
  return (

    <AppBar position="sticky" sx={{ width: '100%', background: '#F7F9FF', color: '#264764', boxShadow: 3, boxShadow: 'none', py: 1 }}>
      <Container maxWidth='lg'>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: 2,
          width: '100%'
        }}>
          <Toolbar disableGutters sx={{
            mb: 2
          }}>
            <Box component={Link} to={'/'} sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              textDecoration: 'none'
            }}>
              <Typography variant='h6' sx={{
                fontWeight: '500',
                fontSize: '28px',
                lineHeight: '36px',
                color:'#264764'
              }}>
                TAIF
              </Typography>

              <span style={{
                color: '#42474D',
                fontSize: '11px',
                fontWeight: '500',
                lineHeight: '14px',
                letterSpacing: '0.33px'
              }}>
                Everything for your family
              </span>
            </Box>
          </Toolbar>
          <Search sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            maxWidth: '54%',
            boxShadow: 1,
            borderRadius: '9999px',
            px: 4,
            py: .5
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for baby care, clothing, essentials..."
              inputProps={{ 'aria-label': 'search' }}
            />
            
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
              component={Link}
              to={token? '/ProfileInfo' : '/Login'}
            >
              <AccountCircle />
            </IconButton>
          </Box>

        </Box>



        <Box sx={{ overflowX: 'auto' }}>
          <Categories wrap="nowrap">
            {(category) => (
              <Chip
                component={Link}
                to={`/Category/${category.id}`}
                label={category.name}
                clickable
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '20px',
                  letterSpacing: '0.14px',
                  color: '#676c73',
                  background: 'none',
                  p: 0,
                  '& .MuiChip-label': { px: 0 },
                  transition: 'color 0.2s',
                  '&:hover': { background: 'none', color: '#18232c' },
                }}
              />
            )}
          </Categories>
        </Box>
      </Container>

    </AppBar>

  )
}
