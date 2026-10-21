import React from 'react'
import Categories from './Categories'
import { AppBar, Box, Container, InputBase, Toolbar, Typography, styled, alpha, IconButton } from '@mui/material'
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

      <AppBar position="static" sx={{ width:'100%', background: '#F7F9FF',boxShadow: 3, color: '#0E1D29', boxShadow: 'none', py: 2 }}>
        <Container>
           <Box sx={{
            display:'flex',
            flexWrap:'nowrap',
            justifyContent:'space-between'}}>
          <Toolbar sx={{ mb: 2 
           }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start'
            }}>
              <Typography variant='h6'>
                TAIF
              </Typography>

              <span>
                Everything for your family
              </span>
            </Box>
          </Toolbar>
          <Search sx={{display:'flex',
          width:'90%'
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
            >
              <AccountCircle />
            </IconButton>
          </Box>
          
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              
              aria-haspopup="true"
             
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
        </Box>


        <Box sx={{ px: { xs: 2, md: 4 }, pb: 1, overflowX: 'auto' }}>
          <Categories />
        </Box>
        </Container>
       
      </AppBar>

  )
}
