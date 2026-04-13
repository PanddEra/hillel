import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navigate} from "react-router";
import UsersListPage from "../pages/UsersListPage";
import MainLayout from "../templates/MainLayout.jsx";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Navigate to="/users"/>}/>
                    <Route path="/users" element={<UsersListPage/>}/>
                    {/*<Route path="/users/create" element={<CreateUserPage />} />*/}
                    {/*<Route path="/users/:id" element={<UserDetailsPage />} />*/}
                    {/*<Route path="/users/:id/edit" element={<EditUserPage />} />*/}
                    {/*<Route path="*" element={<NotFoundPage />} />*/}
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;