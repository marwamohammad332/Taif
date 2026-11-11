import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useRemoveCartItem () {
    const queryClient = useQueryClient();
    const removeCartItem = async(productId)=>{
        const response = await authAxiosInstance.delete(`Carts/${productId}`);
        return response.data;
    }
  return  useMutation({
      mutationFn:removeCartItem,
      onSuccess:()=>{
          queryClient.invalidateQueries({ queryKey:['cart']})
      }
    })
}
