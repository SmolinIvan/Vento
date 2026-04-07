export function saveAuthToken(token: string) {
    localStorage.setItem('jwt_auth', token);
};

export function clearAuthToken() {
    localStorage.removeItem('jwt_auth');
};

export function getAuthToken() {
    return localStorage.getItem('jwt_auth');
};
