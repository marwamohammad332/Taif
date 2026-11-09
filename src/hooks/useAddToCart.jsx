import axios from 'axios'
import React from 'react'
import { useAuthStore } from '../store/useAuthStore';
import {useMutation} from '@tanstack/react-query';

export default function useAddToCart(ProductId) {

    const token = useAuthStore((state)=>state.token);
    const addToCart= async()=>{
        const response = await axios.post(`https://knowledgeshop.runasp.net/api/Carts`,
            {ProductId:ProductId ,Count:1},{
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Accept-Language':'en'
                }
            }
        );
        return response.data;
    }
  return useMutation ({
    mutationFn:addToCart,
  })
}
