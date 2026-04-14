import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi/usersApi.js";
import {inputs, validationSchema} from "../../components/UserForm/formConfig.js";
import {Navigate, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import Loader from "../../components/Loader/index.js";


function EditUserPage({users, setUsers, showToast, }) { // users, setUsers for fake api
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const id = useParams().id;

    useEffect(() => {
        async function fetchUserById() {
            try {
                const res = await usersApi.getUserById(id);

                //for fake api
                if (!res) {
                    const user = users.find(user => user.id === Number(id));
                    if (!user) {
                        showToast('danger', 'User not found');
                        navigate('/users');
                        return;
                    }
                    setUser(user)
                    return;
                }
                //--------

                if (!res) {
                    showToast('danger', 'User not found');
                    navigate('/users');
                    return;
                }
                setUser(res);
            } catch (e) {
                showToast('danger', e.message);
            }
        }

        fetchUserById();
    }, []);

    const onSubmitHandler = (values) => {
        const apiPayload = {
            ...values,
            company: {name: values.companyName},
            address: {city: values.addressCity, street: values.addressStreet}
        };

        async function updateUser() {
            try {
                const res = await usersApi.updateUser(id, apiPayload);

                //for fake api
                if (!res) {
                    const user = users.find(user => user.id === Number(id));
                    if (!user) {
                        navigate('/users');
                        showToast('success', 'User updated');
                        return;
                    }
                    setUsers(users.map(u => {
                        if (Number(u.id) === Number(id)) {
                            return user;
                        }
                        return u;
                    }))
                    navigate('/users');
                    showToast('success', 'User updated');
                    return;
                }
                //--------

                if (!res) {
                    showToast('danger', 'User not found');
                    navigate('/users');
                    return;
                }

                //for fake api
                setUsers(users.map(u => {
                    if (u.id === Number(id)) {
                        return res;
                    }
                    return u;
                }))
                console.log(users)
                //--------

                navigate('/users');
                showToast('success', 'User updated');
            } catch (e) {
                showToast('danger', e.message);
            }
        }

        updateUser();
    }
    return (
        <div>
            {user?.id ? <UserForm
                initialValues={{
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    companyName: user.company.name,
                    addressCity: user.address.city,
                    addressStreet: user.address.street,
                    website: user.website
                }}
                validationSchema={validationSchema}
                inputs={inputs}
                formTitle={`Edit User: ${user.name}`}
                formButton="Submit"
                onSubmit={onSubmitHandler}/> : <Loader/>}
        </div>
    );
}

export default EditUserPage;
