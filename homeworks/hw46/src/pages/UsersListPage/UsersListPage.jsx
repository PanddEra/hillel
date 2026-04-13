import React, {useEffect, useState} from 'react';
import usersApi from "../../api/usersApi/usersApi.js";
import Message from "../../components/Message";
import UsersTable from "../../components/UsersTable";


function UsersListPage() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        async function fetchUsers() {
            try {
                const users = await usersApi.getUsers();
                setUsers(users);
            } catch (e) {
                Message('error', e.message);
        }
        }
        fetchUsers();
        console.log(users)
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <UsersTable users={users} onEdit={() => {}} onDelete={() => {}} />
        </div>
    );
};

export default UsersListPage;
