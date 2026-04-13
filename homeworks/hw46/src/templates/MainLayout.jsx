import { Container } from 'react-bootstrap';
import NavigationBar from '../components/AppNavbar';

const MainLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Container className="mt-4">
                {children}
            </Container>
        </>
    );
};
export default MainLayout;
