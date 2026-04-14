import {useEffect, useState} from "react";
import {useParams} from "react-router";
import usersApi from "../../api/usersApi";
import Loader from "../../components/Loader/index.js";

function UserDetailsPage({showToast}) {
    const {id} = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        async function fetchUserById() {
            try{
                const user = await usersApi.getUserById(id);
                setUser(user);
            } catch (e) {
               showToast('danger', e.message)
            }
        }
        fetchUserById();
    }, []);

    return (
        <div>
            {user ? null : <Loader/>}
            <h1>User Details</h1>
            <p>Name: {user.name} </p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email} </p>
            <p>Phone: {user.phone} </p>
            <p>Website: {user.website} </p>
            <p>Company: {user.company.name}</p>
            <p>City: {user.address.city}</p>
            <p>Street: {user.address.street}</p>
        </div>
    );
}

export default UserDetailsPage;
