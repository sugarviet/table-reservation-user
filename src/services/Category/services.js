import { useQuery } from '@tanstack/react-query'
import {
    getAllCategory
} from './callers';

export const useGetAllCategory = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => getAllCategory(),
      
    })
}