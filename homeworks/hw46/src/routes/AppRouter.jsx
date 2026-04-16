import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navigate} from "react-router";
import UsersListPage from "../pages/UsersListPage";
import NotFoundPage from "../pages/NotFoundPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import EditUserPage from "../pages/EditUserPage";
import CreateUserPage from "../pages/CreateUserPage";
import React from "react";
import MainLayout from "../templates/MainLayout.jsx";
import PropTypes from "prop-types";
import {userShape} from "../types/userTypes.js";

function AppRouter({users, setUsers, showToast}) {
    return (
        <Router>
            <MainLayout users={users}>
                <Routes>
                    <Route path="/" element={<Navigate to="/users"/>}/>
                    <Route path="/users"
                           element={<UsersListPage showToast={showToast} users={users} setUsers={setUsers}/>}/>
                    <Route path="/users/create"
                           element={<CreateUserPage showToast={showToast} setUsers={setUsers} users={users}/>}/>
                    <Route path="/users/:id" element={<UserDetailsPage showToast={showToast} users={users}/>}/>
                    <Route path="/users/:id/edit"
                           element={<EditUserPage showToast={showToast} users={users} setUsers={setUsers}/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </MainLayout>
        </Router>
    );
}

AppRouter.propTypes = {
    users: PropTypes.arrayOf(userShape).isRequired,
    setUsers: PropTypes.func.isRequired,
    showToast: PropTypes.func.isRequired
};

export default AppRouter;