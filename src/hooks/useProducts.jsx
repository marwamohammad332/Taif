import {useQuery} from '@tanstack/react-query'
import getProducts from '../services/getProducts.service'
import { useLanguageStore } from '../store/languageStore';

export default function useProducts () {
 const language = useLanguageStore((state)=>state.language);
  
  return useQuery ({
   
   queryKey: ['Products',language],
    queryFn: getProducts,
    staleTime: 1000* 60 *3
   
})
}