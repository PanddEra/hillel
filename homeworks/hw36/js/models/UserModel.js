import {BASE_URL, ENDPOINTS} from "../config/api.js"

class UserModel {
    users = null;
    constructor() {
        this.users = [];
    }

    #fetchGetAllUsers = async () => {
        try{
            const response = await fetch(`${BASE_URL}${ENDPOINTS.USERS}`)
            const data = await response.json();
            return data;
        }catch (e){
            throw new Error(e.message);
        }
    }
    #fetchCreateUser = async (userData) => {
        try{
            const response = await fetch(`${BASE_URL}${ENDPOINTS.USERS}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(userData),
            });
            if(!response.ok) throw new Error(response.statusText);
        }catch (e){
            throw new Error(e.message);
        }
    }
    #fetchUpdateUser = async (id, userData) => {
        try{
            const response = await fetch(`${BASE_URL}${ENDPOINTS.USER_BY_ID(id)}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(userData),
            });
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();
        }catch (e){
            throw new Error(e.message);
        }
    }
    #fetchDeleteUser = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}${ENDPOINTS.USER_BY_ID(id)}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            });
            if(!response.ok) throw new Error(response.statusText);
        }catch (e){
            throw new Error(e.message);
        }
    }
    
    async getAll(){
        const users = await this.#fetchGetAllUsers();
        this.users = await users;
        return this.users;
    }
    async create(userData){
        await this.#fetchCreateUser(userData);
        this.users.push(userData);
    }
    async update(id, userData){
        const res = await this.#fetchUpdateUser(id, userData);
        console.log(res)
        this.users = this.users.map(user =>
            user.id === res.id ? {...user, ...res} : user
        );
        console.log(this.users)
    }
    async delete(id){
        await this.#fetchDeleteUser(id);
        this.users = this.users.filter(user => Number(user.id) !== Number(id));
        console.log(this.users)
    }
}
export default UserModel;