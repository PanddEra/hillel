import Modal from 'react-bootstrap/Modal';

function ModalGenerator({header, body, footer, show, onHide}) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{body}</Modal.Body>

            <Modal.Footer>{footer}</Modal.Footer>
        </Modal>
    );
}

export default ModalGenerator;