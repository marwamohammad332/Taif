import React from 'react'
import { RouterProvider } from 'react-router/dom'
import router from './router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import  { getTheme } from './theme.js'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useThemeStore } from './store/themeStore.js'


const queryClient = new QueryClient()

export default function App() {
  const mode = useThemeStore((state)=> state.mode);
  const theme = getTheme (mode)

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
           <CssBaseline />
          <RouterProvider router={router} />
          <ToastContainer />
        </QueryClientProvider>

      </ThemeProvider>
    </>
  )
}
