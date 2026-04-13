import ToastMessage from "../../components/ToastMessage";
import UsersTable from "../../components/UsersTable";
import {Navigate} from "react-router";


function UsersListPage({users}) {
    
    const onEditHandler = (id) => {
        return <Navigate to={`/users/${id}/edit`} />
    }

    const onDeleteHandler = (id) => {
        return <ToastMessage message={'User deleted' + id}/>
    }
    

    return (
        <div>
            <h1>Users List</h1>
            <UsersTable users={users} onEdit={onEditHandler} onDelete={onDeleteHandler} />
        </div>
    );
};

export default UsersListPage;
