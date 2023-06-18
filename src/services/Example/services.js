import { useQuery } from '@tanstack/react-query'
import {
    getAllUser
} from './callers';

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => getAllUser()
    })
}
