import React, {useState} from 'react';
import ToastMessage from "./components/ToastMessage";
import AppRouter from "./routes";

function App() {
    const [users, setUsers] = useState([]);
    const [toast, setToast] = useState(null);

    const showToast = (type, message) => {
        setToast({type, message});
    };
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
        </>
    );
}


export default App;
