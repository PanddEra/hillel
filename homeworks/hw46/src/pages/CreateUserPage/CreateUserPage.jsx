import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi/usersApi.js";
import {initialValues, inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import {useNavigate} from "react-router";

function CreateUserPage({setUsers, showToast}) {
    const navigate = useNavigate();
    const onSubmitHandler = (userData) => {
        async function fetchNewUser() {
            try {
                const response = await usersApi.createUser(userData);
                if (!response) {
                    showToast('danger', 'User not created');
                    return;
                }
                setUsers(await response);
                showToast('success', 'User created');
                navigate('/');
            } catch (e) {
                showToast('danger', e.message);
            }
        }

        fetchNewUser();
    }
    return (
        <div>
            <UserForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                inputs={inputs}
                formTitle="Create New User"
                formButton="Create User"
                onSubmit={onSubmitHandler}/>
        </div>
    );
}

export default CreateUserPage;
