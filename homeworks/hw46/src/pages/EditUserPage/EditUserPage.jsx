import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserForm from "../../components/UserForm";
import usersApi from "../../api/usersApi";
import { inputs, validationSchema } from "../../components/UserForm/formConfig.js";
import Loader from "../../components/Loader";

function EditUserPage({ users, setUsers, showToast }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        async function fetchUserById() {
            try {
                const res = await usersApi.getUserById(id);
                if (res) {
                    setUser(res);
                } else {
                    const foundUser = users.find(u => u.id === Number(id));
                    if (!foundUser) throw new Error('User not found');
                    setUser(foundUser);
                }
            } catch (e) {
                const foundUser = users.find(u => u.id === Number(id));
                if (foundUser) {
                    setUser(foundUser);
                }else{
                    showToast('danger', e.message || 'User not found');
                    navigate('/*');
                }
            } finally {
                setIsLoading(false);
            }
        }
        fetchUserById();
    }, [id, navigate, users, showToast]);

    const onSubmitHandler = async (values) => {
        const apiPayload = {
            ...values,
            id: Number(id),
            company: { name: values.companyName },
            address: { city: values.addressCity, street: values.addressStreet }
        };

        try {
            const res = await usersApi.updateUser(id, apiPayload);
            const updatedData = res || apiPayload;

            setUsers(prevUsers =>
                prevUsers.map(u => (u.id === Number(id) ? updatedData : u))
            );

            showToast('success', 'User updated successfully');
            navigate('/users');
        } catch (e) {
            if(users.find(u => u.id === Number(id))) {
                setUsers(prevUsers =>
                    prevUsers.map(u => (u.id === Number(id) ? apiPayload : u))
                );
                showToast('success', 'User updated successfully');
                navigate('/users');
                return;
            }
            showToast('danger', e.message || 'Cant update user');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <div>
            <h1>Edit User: {user.name}</h1>
            <UserForm
                initialValues={{
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    companyName: user.company?.name || "",
                    addressCity: user.address?.city || "",
                    addressStreet: user.address?.street || "",
                    website: user.website
                }}
                validationSchema={validationSchema}
                inputs={inputs}
                formTitle="Update Profile"
                formButton="Save Changes"
                onSubmit={onSubmitHandler}
            />
        </div>
    );
}

export default EditUserPage;