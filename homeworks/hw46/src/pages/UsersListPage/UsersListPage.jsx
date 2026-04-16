import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import UsersTable from "../../components/UsersTable";
import usersApi from "../../api/usersApi";
import Loader from "../../components/Loader";
import ModalGenerator from "../../components/Modal";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";
import {userShape} from "../../types/userTypes.js";

function UsersListPage({users, setUsers, showToast}) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [userIdToDelete, setUserIdToDelete] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchUsers() {
            if (users.length > 0) {
                setIsLoading(false);
                return;
            }

            try {
                const res = await usersApi.getUsers();
                if (!res) {
                    throw new Error('Users not found');
                }
                setUsers(res);
                setIsLoading(false);
            } catch (e) {
                showToast('danger', e.message || 'Users not found');
                setIsLoading(false);
                navigate('/*');
            }
        }

        fetchUsers();
    }, []);

    function onEditHandler(id) {
        navigate(`/users/${id}/edit`);
    }

    function onDeleteHandler(id) {
        setUserIdToDelete(id);
        setShowModal(true);
    }

    async function onDeleteConfirm(id) {
        try {
            setIsLoading(true);
            const res = await usersApi.deleteUser(id);

            setShowModal(false);

            if (!res) {
                const userExists = users.some(user => user.id === Number(id));
                if (!userExists) throw new Error('User not found');
            }

            setUsers(prevUsers => prevUsers.filter(user => user.id !== Number(id)));
            showToast('success', 'User deleted');
        } catch (e) {
            showToast('danger', e.message || 'User not deleted');
            setShowModal(false);
        } finally {
            setIsLoading(false);
            setUserIdToDelete(null);
        }
    }

    return (
        <div>
            {isLoading && (
                <Loader/>)
            }
            <h1>Users List</h1>
            {users.length ? (
                <UsersTable
                    users={users}
                    onEdit={onEditHandler}
                    onDelete={onDeleteHandler}
                />) : <p>List is empty. Add new user or refresh page.</p>}
            {showModal && (
                <ModalGenerator
                    header={`Confirm deletion of user`}
                    body={`Are you sure you want to delete ${users.find(u => u.id === Number(userIdToDelete))?.name}?`}
                    footer={
                        <div className="d-flex gap-2">
                            <Button variant="secondary" onClick={() => setShowModal(false)} disabled={isLoading}>Cancel</Button>
                            <Button variant="danger" onClick={() => onDeleteConfirm(userIdToDelete)} disabled={isLoading}>Delete</Button>
                        </div>
                    }
                    onHide={() => setShowModal(false)}
                    show={showModal}
                />
            )}
        </div>
    );
}

UsersListPage.propTypes = {
    users: PropTypes.arrayOf(userShape).isRequired,
    setUsers: PropTypes.func.isRequired,
    showToast: PropTypes.func.isRequired
};

export default UsersListPage;