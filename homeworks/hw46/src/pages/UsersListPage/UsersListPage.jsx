import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import UsersTable from "../../components/UsersTable";
import usersApi from "../../api/usersApi/index.js";
import Loader from "../../components/Loader/index.js";

function UsersListPage({ users, setUsers, showToast }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await usersApi.getUsers();
                if (!res) {
                    showToast('danger', 'Users not found');
                    navigate('/*');
                    return;
                }
                setUsers(res);
                setIsLoading(false);
            } catch (e) {
                showToast('danger', e.message);
            }
        }
        fetchUsers();
    }, []);

    function onEditHandler(id) {
        navigate(`/users/${id}/edit`);
    }

    async function onDeleteHandler(id) {
        try {
            setIsLoading(true);
            const res = await usersApi.deleteUser(id);

            if (!res) {
                const userExists = users.some(user => user.id === Number(id));
                if (!userExists) {
                    showToast('danger', 'User not found');
                    return;
                }
            }
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
            setIsLoading(false);
            showToast('success', 'User deleted');
        } catch (e) {
            showToast('danger', e.message || 'User not deleted');
        }
    }

    return (
        <div>
            {isLoading && (
                <Loader/>)
            }
            <h1>Users List</h1>
            <UsersTable
                users={users}
                onEdit={onEditHandler}
                onDelete={onDeleteHandler}
            />
        </div>
    );
}

export default UsersListPage;