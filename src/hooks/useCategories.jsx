import React from 'react'
import {useQuery} from '@tanstack/react-query'
import getCategries from '../services/getCategories.service'
import { useLanguageStore } from '../store/languageStore';

export default function useCategories () {
  const language = useLanguageStore((state)=>state.language);
  
  return useQuery ({
   
   queryKey: ['Categories',language],
    queryFn: getCategries,
    staleTime: 1000* 60 *3
   
})
}

