import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi/usersApi.js";
import {initialValues, inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import ToastMessage from "../../components/ToastMessage/index.js";
import {Navigate, useParams} from "react-router";
import {useState} from "react";


function EditUserPage({editUser}) {
    const [userIsUpdated, setUserIsUpdated] = useState(false);
    const [user, setUser] = useState({});
    const id = useParams();
    const onSubmitHandler = (userData) => {
        async function fetchEditUser() {
            try{
                const response = await usersApi.updateUser(userData, id);
                if(await response){
                    setUserIsUpdated(true);
                }
                editUser(await response);
                setUser(await response);
            }catch (e) {
                <ToastMessage type={'error'} message={e.message}/>
            }
        }
        fetchEditUser();
    }
    return (
        <div>
            {userIsUpdated ? <Navigate to={"/"}/> : null}
            <UserForm initialValues={user} validationSchema={validationSchema} inputs={inputs} formTitle="Edit User" formButton="Submit" onSubmit={onSubmitHandler}/>
        </div>
    );
}

export default EditUserPage;
