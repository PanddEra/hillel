import { Container } from 'react-bootstrap';
import NavigationBar from '../components/AppNavbar';
import PropTypes from "prop-types";
import {userShape} from "../types/userTypes.js";

const MainLayout = ({users, children }) => {
    return (
        <>
            <NavigationBar users={users}/>
            <Container className="mt-4">
                {children}
            </Container>
        </>
    );
};

MainLayout.propTypes = {
    users: PropTypes.arrayOf(userShape).isRequired,
    children: PropTypes.node.isRequired
};
export default MainLayout;
