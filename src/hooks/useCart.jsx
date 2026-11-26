import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import authAxiosInstance from '../api/authAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useLanguageStore } from '../store/languageStore';

export default function useCart() {

    const token = useAuthStore((state)=>state.token);
     const language = useLanguageStore((state)=>state.language);
    const getCart = async()=>{
        const response = await authAxiosInstance.get(`Carts`);
       
        return response.data;
    };
   
  return useQuery({
    queryKey:['cart',language],
    queryFn:getCart,
    enabled:!!token,
    staleTime: 0,
    refetchOnMount: 'always'
  })
}
