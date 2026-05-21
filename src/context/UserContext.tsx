import { getAuthToken } from '@helpers';
import { User } from '@shared-types';
import React, { FC, PropsWithChildren, useState } from 'react';

type UserContextState = {
    user: User | null;
    authToken: string | null;
    isAuthenticated: boolean;
    setUser: (user: User | null) => void;
    setAuthToken: (token: string | null) => void;
    setAuthenticated: (isAuthenticated: boolean) => void;
}

const defaultContextState: UserContextState = {
    user: null,
    authToken: null,
    isAuthenticated: false,
    setUser: () => {},
    setAuthToken: () => {},
    setAuthenticated: () => {},
};

export const UserContext = React.createContext(defaultContextState);

export const UserProvider: FC<PropsWithChildren<object>> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(getAuthToken());
    const [isAuthenticated, setAuthenticated] = useState<boolean>(!!authToken);

    return (
        <UserContext.Provider value={{ user, authToken, isAuthenticated, setUser, setAuthToken, setAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};
