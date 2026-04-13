import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi/usersApi.js";
import {initialValues, inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import ToastMessage from "../../components/ToastMessage/index.js";
import {Navigate} from "react-router";


function CreateUserPage({addUser}) {
    const onSubmitHandler = (userData) => {
        async function fetchNewUser() {
            try{
                const response = await usersApi.createUser(userData);
                addUser(await response.json());
            }catch (e) {
                return <ToastMessage type={'error'} message={e.message}/>
            }
            return <Navigate to={"/"}/>
        }
        fetchNewUser();
    }
    return (
        <div>
            <UserForm initialValues={initialValues} validationSchema={validationSchema} inputs={inputs} formTitle="Create New User" formButton="Create User" onSubmit={onSubmitHandler}/>
        </div>
    );
}

export default CreateUserPage;
