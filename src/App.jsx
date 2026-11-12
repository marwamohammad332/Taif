import React from 'react'
import { RouterProvider } from 'react-router/dom'
import router from './router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ToastContainer />
        </QueryClientProvider>

      </ThemeProvider>
    </>
  )
}
