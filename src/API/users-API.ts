import { User } from '@shared-types';

const API_URL = process.env.API_URL || 'https://api.smolinprojects.ru/api';

type UserType = User &{
    id?: number;
};

type LoginResponseType = {
    user:UserType;
    token: string;
};

export const loginUserAPI = async ({email, password} : User ): Promise<LoginResponseType> => {
    const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password}),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    return await response.json() as LoginResponseType;
};


export const registerUserAPI = async ({username, email, password} : User): Promise<LoginResponseType> => {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, email: email, password: password}),
    });

    if (!response.ok) {
        throw new Error('Failed to register');
    }

    return await response.json() as LoginResponseType;
};


export const getCurrentUserAPI = async (token: string): Promise<UserType> => {
    const response = await fetch(`${API_URL}/users/current/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to get current user');
    }
    // тут ошибка возвращается только логин и почта а не конкретный тип. Подумать
    return await response.json() as UserType;
};
