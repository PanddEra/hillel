import {Navbar, Nav, Container, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState} from "react";
import {useNavigate} from "react-router";
import PropTypes from "prop-types";
import {userShape} from "../../types/userTypes.js";

const NavigationBar = ({users}) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        const user = users.find(u => u.name.toLowerCase().trim().includes(search.toLowerCase().trim()));
        if (user) {
            setSearch("");
            navigate(`/users/${user.id}`)
        }else{
            setSearch("");
            navigate('/*');
        }
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">UsersCRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Users List</Nav.Link>
                        <Nav.Link as={Link} to="/users/create">Create User</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <Form.Control
                            type="search"
                            placeholder="Search by name..."
                            className="me-2"
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button type="submit" disabled={search.trim() === ""} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

NavigationBar.propTypes = {
    users: PropTypes.arrayOf(userShape).isRequired
};
export default NavigationBar;
