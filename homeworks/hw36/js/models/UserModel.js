import {BASE_URL, ENDPOINTS} from "../config/api.js"

class UserModel {
    users = null;
    lastId = 10;

    constructor() {
        this.users = [];
    }

    #fetchGetAllUsers = () => {
        return fetch(`${BASE_URL}${ENDPOINTS.USERS}`)
            .then(response => {
                return response.json().then(data => {
                    if (!response.ok) throw new Error(response.statusText);
                    return data;
                });
            })
            .catch(error => {
                throw new Error(error.message);
            })
            .finally(() => {
                console.log('Fetch all users finished');
            });
    }
    #fetchCreateUser = async (userData) => {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.USERS}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error(response.statusText);
        return await response.json();
    }
    #fetchUpdateUser = async (id, userData) => {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.USER_BY_ID(id)}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error(response.statusText);
        return await response.json();
    }
    #fetchDeleteUser = async (id) => {
        const response = await fetch(`${BASE_URL}${ENDPOINTS.USER_BY_ID(id)}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        });
        if (!response.ok) throw new Error(response.statusText);
    }

    async getAll() {
        const users = await this.#fetchGetAllUsers();
        this.users = await users;
        this.lastId = users[users.length - 1].id;
        return this.users;
    }

    async create(userData) {
        const res = await this.#fetchCreateUser(userData);
        res.id = ++this.lastId;
        this.users.push(res);
    }

    async update(id, userData) {
        const res = await this.#fetchUpdateUser(id, userData);
        this.users = this.users.map(user =>
            user.id === res.id ? {...user, ...res} : user
        );
        console.log(this.users)
    }

    async delete(id) {
        await this.#fetchDeleteUser(id);
        this.users = this.users.filter(user => Number(user.id) !== Number(id));
    }
}

export default UserModel;