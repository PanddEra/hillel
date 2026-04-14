import React, {useEffect, useState} from 'react';
import ToastMessage from "./components/ToastMessage/index.js";
import Loader from "./components/Loader/index.js";
import usersApi from "./api/usersApi/index.js";
import AppRouter from "./routes/AppRouter.jsx";
import MainLayout from "./templates/MainLayout.jsx";

function App() {
    const [users, setUsers] = useState([]);
    const [toast, setToast] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const showToast = (type, message) => {
        setToast({type, message});
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
    return (
        <>
            <AppRouter users={users}
                       setUsers={setUsers}
                       showToast={showToast}/>

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
        </>
    );
}


export default App;
