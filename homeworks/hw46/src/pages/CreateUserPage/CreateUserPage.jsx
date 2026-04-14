import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi/usersApi.js";
import {initialValues, inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import ToastMessage from "../../components/ToastMessage/index.js";
import {Navigate} from "react-router";
import {useState} from "react";


function CreateUserPage({addUser}) {
    const [userIsCreated, setUserIsCreated] = useState(false);
    const onSubmitHandler = (userData) => {
        async function fetchNewUser() {
            try{
                const response = await usersApi.createUser(userData);
                if(await response){
                    setUserIsCreated(true);
                }
                addUser(await response);
            }catch (e) {
                <ToastMessage type={'error'} message={e.message}/>
            }
        }
        fetchNewUser();
    }
    return (
        <div>
            {userIsCreated ? <Navigate to={"/"}/> : null}
            <UserForm initialValues={initialValues} validationSchema={validationSchema} inputs={inputs} formTitle="Create New User" formButton="Create User" onSubmit={onSubmitHandler}/>
        </div>
    );
}

export default CreateUserPage;
