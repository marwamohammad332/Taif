import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import getProducts from '../services/getProducts.service';
import axiosInstance from '../api/axiosInstance';
import { useLanguageStore } from '../store/languageStore';

export default function useProduct(id) {
 const language = useLanguageStore((state)=>state.language);
    const getProductDetails = async () => {
        const response = await axiosInstance.get(`Products/${id}`);
       
        return response.data.response;
    }
    return useQuery({
        queryKey: ['Product', id,language],
        queryFn: getProductDetails,
        staleTime: 1000 * 60 * 3

    })
}
