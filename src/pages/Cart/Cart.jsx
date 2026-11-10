import { Box, Button, Container, Typography } from "@mui/material";
import Nav from "../../component/cartComponanent/Nav";
import HeaderBar from "../../component/cartComponanent/headerBar";
import CartLayout from "../../component/cartComponanent/CartLayout";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router";

export default function Cart() {
   const token = useAuthStore ((state)=>state.token);
    

    if (!token){
        return(
            <Box sx={{
               py:'32px',
              width:'100%',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
            }}>
                <Typography>
                    Please login to view your cart
                </Typography>
                <Button component={Link} to='/Login'>
                    Login
                </Button>
            </Box>
        )
    }
  
  return (
    <>
    <Container sx={{
      py:'32px',
      display:'flex',
      flexDirection:'column',
      gap:'24px'
    }}> 
    <Nav />
    <HeaderBar />
    <CartLayout />
    </Container>
    
    </>
  )
}
