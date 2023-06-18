import { useQuery } from '@tanstack/react-query'
import {
    getAllBirdFood, getBirdFoodById
} from './callers';

export const useGetAllBirdFood = () => {
    return useQuery({
        queryKey: ['birds'],
        queryFn: () => sleep(1000).then(() => getAllBirdFood()),
    })
}

export const useGetBirdFoodById = (id) => {
    return useQuery({
        queryKey: ['bird_food_by_id', id],
        queryFn: () => getBirdFoodById(id)
    })
}
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};






