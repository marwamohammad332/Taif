import React from 'react'
import { Navigate } from 'react-router'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import { useAuthStore } from '../../store/useAuthStore'


export default function ProfileInfo() {
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()
  const token = useAuthStore((state) => state.token)
if (!token) return <Navigate to="/" replace />

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <>
     <Button
        variant="contained"
        onClick={handleLogout}
        sx={{
          backgroundColor: '#3F5F7D',
          borderRadius: '9999px',
          textTransform: 'none',
          px: 4,
        }}
      >
        Logout
      </Button>
    </>
  )
}
