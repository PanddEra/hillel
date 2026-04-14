import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navigate} from "react-router";
import UsersListPage from "../pages/UsersListPage";
import MainLayout from "../templates/MainLayout.jsx";
import NotFoundPage from "../pages/NotFoundPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import EditUserPage from "../pages/EditUserPage";
import CreateUserPage from "../pages/CreateUserPage";
import React, {useEffect, useState} from "react";
import usersApi from "../api/usersApi/index.js";
import ToastMessage from "../components/ToastMessage";
import Loader from "../components/Loader";


function AppRouter() {
    const [users, setUsers] = useState([]);
    const [toast, setToast] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const showToast = (type, message) => {
        setToast({ type, message });
    };
    useEffect(() => {
        async function fetchUsers() {
            try {
                const users = await usersApi.getUsers();
                setUsers(users);
                setIsLoading(false);
            } catch (e) {
                showToast('danger', e.message);
            }
        }

        fetchUsers();
    }, []);

    const addUser = (user) => {
        const lastId = users.length > 0 ? users[users.length - 1].id : 0;
        const newUser = { ...user, id: lastId + 1 };
        setUsers(prev => [...prev, newUser]);
    };
    const editUser = (userData, id) => {
        setUsers(users.map(user => {
            if (Number(user.id) === Number(id)) {
                return userData;
            }
            return user;
        }))
        console.log(users);
    }
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }
   
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Navigate to="/users"/>}/>
                    <Route path="/users" element={<UsersListPage showToast={showToast} users={users} deleteUser={deleteUser}/>}/>
                    <Route path="/users/create" element={<CreateUserPage showToast={showToast} addUser={addUser}/>}/>
                    <Route path="/users/:id" element={<UserDetailsPage showToast={showToast} users={users}/>}/>
                    <Route path="/users/:id/edit" element={<EditUserPage showToast={showToast} editUser={editUser}/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
                {toast && (
                    <ToastMessage
                        type={toast.type}
                        message={toast.message}
                        onClose={() => setToast(null)}
                    />
                )}
                {isLoading && (
                    <Loader/>
                )}
            </MainLayout>
        </Router>
    );
};

export default AppRouter;