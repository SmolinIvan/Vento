import { DishType, newDish } from '@shared-types';

// const API_URL = process.env.API_URL;
const API_URL = process.env.API_URL || 'http://api.smolinprojects.ru/api';

export async function fetchAllDishes(): Promise<DishType[]> {
    const response = await fetch(`${API_URL}/menu`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as DishType[];
    return data;
}


export async function postDish(dishData: newDish): Promise<DishType> {
    const response = await fetch(`${API_URL}/menu`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dishData),
    });

    if (!response.ok) {
        const errorData = await response.json() as { error: string };
        throw new Error(errorData.error || 'Не удалось создать блюдо');
    }

    return await response.json() as DishType;
};


export async function deleteDish(id: number): Promise<DishType> {
    const response = await fetch(`${API_URL}/menu/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(dishData),
    });

    if (!response.ok) {
        const errorData = await response.json() as { error: string };
        throw new Error(errorData.error || 'Не удалось создать блюдо');
    }

    return await response.json() as DishType;
};
