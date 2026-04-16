import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi";
import {initialValues, inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import {useNavigate} from "react-router";
import {useState} from "react";
import Loader from "../../components/Loader";

function CreateUserPage({users, setUsers, showToast}) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitHandler = async (userData) => {
        setIsLoading(true);
        const apiPayload = {
            ...userData,
            company: {name: userData.companyName},
            address: {city: userData.addressCity, street: userData.addressStreet}
        };

        try {
            const response = await usersApi.createUser(apiPayload);
            if (response) {
                const newId = users.length > 0
                    ? Math.max(...users.map(u => u.id)) + 1
                    : 1;
                setUsers(prevUsers => [...prevUsers, {...response, id: newId}]);
                showToast('success', 'User created successfully');
                navigate('/users');
            } else {
                showToast('success', 'User is not created');
            }
        } catch (e) {
            showToast('danger', e.message || 'Failed to create user');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <Loader/>;
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