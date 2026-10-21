import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

export default function useCategories () {

  const getCategries = async ()=>{
    const response = await axios.get('https://knowledgeshop.runasp.net/api/Categories',{
      headers :{
        'Accept-Language':'en'
      }});
      return response.data.response.data;
  } 
  return useQuery ({
   
   queryKey: ['Categories'],
    queryFn: getCategries,
    staleTime: 1000* 60 *3
   
})
}

