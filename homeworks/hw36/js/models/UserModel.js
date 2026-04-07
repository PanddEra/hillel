import {BASE_URL, ENDPOINTS} from "../config/api.js"

class UserModel {
    users = [];

    #fetchGetAllUsers = () => {
        let userData;
            fetchUsers(`${BASE_URL}${ENDPOINTS.USERS}`)
                .then(data => userData = data.json())
                .catch(error => {
                    throw new Error(error.message);
                })
                .finally(() => {
                });
        return userData;
    }
    #fetchCreateUser = async (userData) => {
        try{
            const response = await fetchUsers(`${BASE_URL}/${ENDPOINTS.USERS}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(userData),
            });
        }catch (e){
            throw new Error(e.message);
        }
    }
    #fetchUpdateUser = async (id, userData) => {
        try{
            const response = await fetchUsers(`${BASE_URL}/${ENDPOINTS.USER_BY_ID(id)}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(id, userData),
            });
        }catch (e){
            throw new Error(e.message);
        }
    }
    #fetchDeleteUser = async (id) => {
        try {
            const response = await fetchUsers(`${BASE_URL}/${ENDPOINTS.USER_BY_ID(id)}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(id),
            });
        }catch (e){
            throw new Error(e.message);
        }
    }
    
    async getAll(){
        const users = await this.#fetchGetAllUsers();
        this.users.push(...users);
        return this.users;
    }
    async create(userData){
        await this.#fetchCreateUser(userData);
        this.users.push(userData);
    }
    async update(id, userData){
        await this.#fetchUpdateUser(id, userData);
        this.users.forEach(user => {
            if (user.id === id) {
                users[user.id] = userData;
            }
        });    }
    async delete(id){
        await this.#fetchDeleteUser(id);
        this.users = this.users.filter(user => user.id !== id);
    }
}