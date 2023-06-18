import { useQuery } from '@tanstack/react-query'
import {
    getAllBlog,
    getSingleBlogById
} from './callers';

export const useGetAllBlog = () => {
    return useQuery({
        queryKey: ['blogs'],
        queryFn: () => getAllBlog(),

    })
}
export const useGetSingleBlog = (id) => {
    return useQuery({
        queryKey: ['blogs_by_id', id],
        queryFn: () => getSingleBlogById(id),

    })
}