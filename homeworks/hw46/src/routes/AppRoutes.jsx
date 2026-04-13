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
import ToastMessage from "../components/ToastMessage/index.js";


function AppRouter() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const users = await usersApi.getUsers();
                setUsers(users);
            } catch (e) {
                return <ToastMessage type={'error'} message={e.message} />
            }
        }
        fetchUsers();
    }, []);

    const addUser = (user) => {
        setUsers(prev => [...prev, user]);
    };
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Navigate to="/users"/>}/>
                    <Route path="/users" element={<UsersListPage users={users}/>}/>
                    {<Route path="/users/create" element={<CreateUserPage addUser={addUser}/>} />}
                    {<Route path="/users/:id" element={<UserDetailsPage />} />}
                    {<Route path="/users/:id/edit" element={<EditUserPage />} />}
                    {<Route path="*" element={<NotFoundPage />} />}
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;