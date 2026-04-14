import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
        >
            <Spinner animation="border" role="status" variant="light" />
        </div>
    );
}

export default Loader;