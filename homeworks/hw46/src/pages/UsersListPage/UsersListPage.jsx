import UsersTable from "../../components/UsersTable";
import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import usersApi from "../../api/usersApi/index.js";


function UsersListPage({users, setUsers, showToast}) { // users, setUsers for fake api
    const navigate = useNavigate();

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
            } catch (e) {
                showToast('danger', e.message);
            }
        }
        fetchUsers();
    }, []);
    
    function onEditHandler(id) {
        navigate(`/users/${id}/edit`);
    }

    function onDeleteHandler(id) {
        async function deleteUser() {
            try {
                const res = await usersApi.deleteUser(id);

                //for fake api
                if (!res) {
                    const user = users.find(user => user.id === Number(id))
                    if (!user) {
                        showToast('danger', 'User not found');
                        return;
                    }
                    setUsers(users.filter(user => user.id !== id));
                    showToast('success', 'User deleted');
                    return;
                }
                //--------

                if (!res) {
                    showToast('danger', 'User not deleted');
                    return;
                }
            } catch (e) {
                showToast('danger', e.message);
            }
        }
        deleteUser();
        setUsers(users.filter(user => user.id !== id));
        showToast('success', 'User deleted');
    }

    return (
        <div>
            <h1>Users List</h1>
            <UsersTable users={users} onEdit={onEditHandler} onDelete={onDeleteHandler} />
        </div>
    );
}

export default UsersListPage;
