const BASE_URL = 'https://jsonplaceholder.typicode.com';
const ENDPOINTS = {
    USERS: '/users',
    USER_BY_ID: '/users/:id'
}

const usersApi = {
    async getUsers() {
        const res = await fetch(BASE_URL + ENDPOINTS.USERS);
        if (!res.ok) throw new Error('Cant fetch users');
        return await res.json();
    },
    async createUser(userData) {
        const res = await fetch(BASE_URL + ENDPOINTS.USERS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: userData
        });
        if (!res.ok) throw new Error('Cant create user');
        return await res.json();
    },
    async getUserById(id) {
        const res = await fetch(BASE_URL + ENDPOINTS.USER_BY_ID.replace(':id', id));
        if (!res.ok) throw new Error('Cant fetch user');
        return await res.json();
    },
    async updateUser(id, userData) {
        const res = await fetch(BASE_URL + ENDPOINTS.USER_BY_ID.replace(':id', id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: userData
        });
        if (!res.ok) throw new Error('Cant update user');
        return await res.json();
    },
    async deleteUser(id) {
        const res = await fetch(BASE_URL + ENDPOINTS.USER_BY_ID.replace(':id', id), {
            method: 'DELETE'
        });
        if (!res.ok) throw new Error('Cant delete user');
        return await res.json();
    }
}

export default usersApi;
