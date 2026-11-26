import React, { useEffect } from 'react'
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
import { useLanguageStore } from './store/languageStore.js'
import i18n from './i18n.js'


const queryClient = new QueryClient()

export default function App() {
  const mode = useThemeStore((state)=> state.mode);
  const theme = getTheme (mode)
const language = useLanguageStore ((state)=>state.language);
useEffect(()=>{
i18n.changeLanguage(language)
},[language])

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
