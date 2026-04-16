import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import PropTypes from "prop-types";

function ToastMessage({ type = 'success', message, onClose }) {
    return (
        <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
            <Toast
                bg={type}
                show={true}
                onClose={onClose}
                delay={3000}
                autohide
            >
                <Toast.Header>
                    <strong className="me-auto">Message:</strong>
                </Toast.Header>
                <Toast.Body className={type === 'danger' ? 'text-white' : ''}>
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

ToastMessage.propTypes = {
    type: PropTypes.oneOf(['success', 'danger', 'warning', 'info']),
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ToastMessage;