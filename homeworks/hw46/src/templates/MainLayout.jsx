import { Container } from 'react-bootstrap';
import NavigationBar from '../components/AppNavbar';

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
export default MainLayout;
