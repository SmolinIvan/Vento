import { DishType } from '@shared-types';

// const API_URL = process.env.API_URL;
const API_URL = process.env.API_URL;

export async function fetchAllDishes(): Promise<DishType[]> {
    const response = await fetch(`${API_URL}/menu`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as DishType[];
    return data;
}
