import {useQuery} from '@tanstack/react-query'
import getProducts from '../services/getProducts.service'

export default function useProducts () {

  
  return useQuery ({
   
   queryKey: ['Products'],
    queryFn: getProducts,
    staleTime: 1000* 60 *3
   
})
}