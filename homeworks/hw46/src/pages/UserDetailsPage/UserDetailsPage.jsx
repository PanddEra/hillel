import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import usersApi from "../../api/usersApi";
import Loader from "../../components/Loader";

function UserDetailsPage({users, showToast}) { // users for fake api
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function fetchUserById() {
            try {
                const res = await usersApi.getUserById(id);

                if (res) {
                    setUser(res);
                } else {
                    const foundUser = users.find(u => u.id === Number(id));
                    if (foundUser) {
                        setUser(foundUser);
                    } else {
                        throw new Error('User not found');
                    }
                }
            } catch (e) {
                const foundUser = users.find(u => u.id === Number(id));
                if (foundUser) {
                    setUser(foundUser);
                } else {
                    showToast('danger', e.message || 'User not found');
                    navigate('/*');
                }
            }
        }

        fetchUserById();
    }, [id, users, showToast, navigate]);


    return (
        <div>
            {user ?
                (<div>
                    <h1>User Details</h1>
                    <p><b>Name:</b> {user.name} </p>
                    <p><b>Username:</b> {user.username}</p>
                    <p><b>Email:</b> {user.email} </p>
                    <p><b>Phone:</b> {user.phone} </p>
                    <p><b>Website:</b> {user.website} </p>
                    <p><b>Company:</b> {user.company.name}</p>
                    <p><b>City:</b> {user.address.city}</p>
                    <p><b>Street:</b> {user.address.street}</p>
                </div>)
                : <Loader/>}
        </div>
    );
}

export default UserDetailsPage;
