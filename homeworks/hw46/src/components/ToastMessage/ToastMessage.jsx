import Toast from 'react-bootstrap/Toast';

function ToastMessage(type = 'success', message) {
    return (
        <Toast bg={type} show={true} position="top-end" delay={3000} autohide>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}

export default ToastMessage;