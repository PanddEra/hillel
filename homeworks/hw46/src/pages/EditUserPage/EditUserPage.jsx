import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi/usersApi.js";
import {inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import ToastMessage from "../../components/ToastMessage/index.js";
import {Navigate, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";


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

    const onSubmitHandler = (userData) => {
        const data = JSON.parse(userData);
        async function fetchEditUser() {
            try {
                const response = await usersApi.updateUser(id, JSON.stringify({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    website: data.website,
                    company: {
                        name: data.companyName
                    },
                    address: {
                        city: data.addressCity,
                        street: data.addressStreet
                    }
                }));
                editUser(await response, id);
                navigate('/users');
                showToast(<ToastMessage type={'success'} message={'User edited'}/>);
            } catch (e) {
                showToast(<ToastMessage type={'danger'} message={e.message}/>);
            }
        }

        fetchEditUser();
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
                              formButton="Submit" onSubmit={onSubmitHandler}/> : null}
        </div>
    );
}

export default EditUserPage;
