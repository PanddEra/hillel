import UsersTable from "../../components/UsersTable";
import {useNavigate} from "react-router";
import React from "react";


function UsersListPage({users, deleteUser, showToast}) {
    const navigate = useNavigate();
    
    function onEditHandler(id) {
        navigate(`/users/${id}/edit`)
    }

    function onDeleteHandler(id) {
        deleteUser(id);
        showToast('success', 'User deleted');
    }

    return (
        <div>
            <h1>Users List</h1>
            <UsersTable users={users} onEdit={onEditHandler} onDelete={onDeleteHandler} />
        </div>
    );
};

export default UsersListPage;
