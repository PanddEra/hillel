import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi/usersApi.js";
import {inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import ToastMessage from "../../components/ToastMessage/index.js";
import {Navigate, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import Loader from "../../components/Loader/index.js";


function EditUserPage({editUser, showToast}) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const id = useParams().id;

    useEffect(() => {
        async function fetchUserById() {
            try {
                const userById = await usersApi.getUserById(id);
                setUser(await userById);
            } catch (e) {
                showToast(<ToastMessage type={'danger'} message={e.message}/>);
            }
        }
        fetchUserById()
    }, [id]);

    const onSubmitHandler = (values) => {
        const apiPayload = {
            ...values,
            company: { name: values.companyName },
            address: { city: values.addressCity, street: values.addressStreet }
        };

        async function update() {
            try {
                const updatedUser = await usersApi.updateUser(id, apiPayload);
                editUser(updatedUser, id);
                navigate('/users');
                showToast('success', 'User updated');
            } catch (e) {
                showToast('danger', e.message);
            }
        }
        update();
    }
    return (
        <div>
            {user?.id ? <UserForm initialValues={{
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone,
                companyName: user.company.name,
                addressCity: user.address.city,
                addressStreet: user.address.street,
                website: user.website
            }} validationSchema={validationSchema} inputs={inputs} formTitle={`Edit User: ${user.name}`}
                              formButton="Submit" onSubmit={onSubmitHandler}/> : <Loader/>}
        </div>
    );
}

export default EditUserPage;
