import Table from 'react-bootstrap/Table';

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
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>
                        <button onClick={onEdit}>Edit</button>
                        <button onClick={onDelete}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default UserTable;