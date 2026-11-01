import React from 'react'
import {useQuery} from '@tanstack/react-query'
import getCategries from '../services/getCategories.service'

export default function useCategories () {

  
  return useQuery ({
   
   queryKey: ['Categories'],
    queryFn: getCategries,
    staleTime: 1000* 60 *3
   
})
}

