import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";

function UserTable({users, onEdit, onDelete}) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr>
                    <td>{user.id}</td>
                    <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>
                        <button onClick={() => onEdit(user.id)}>Edit</button>
                        <button onClick={() => onDelete(user.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default UserTable;