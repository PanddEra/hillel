import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi/usersApi.js";
import {initialValues, inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import {useNavigate} from "react-router";

function CreateUserPage({ setUsers, showToast }) {
    const navigate = useNavigate();

    const onSubmitHandler = async (userData) => {
        const apiPayload = {
            ...userData,
            id: crypto.randomUUID().slice(0, 6),
            company: { name: userData.companyName },
            address: { city: userData.addressCity, street: userData.addressStreet }
        };

        try {
            const response = await usersApi.createUser(apiPayload);
            if(response){
                setUsers(prevUsers => [...prevUsers, response]);
                showToast('success', 'User created successfully');
                navigate('/users');
            }else{
                showToast('success', 'User is not created');
            }
        } catch (e) {
            showToast('danger', e.message || 'Failed to create user');
        }
    };

    return (
        <div>
            <UserForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                inputs={inputs}
                formTitle="Create New User"
                formButton="Create User"
                onSubmit={onSubmitHandler}
            />
        </div>
    );
}

export default CreateUserPage;