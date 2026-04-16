import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";

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

ModalGenerator.propTypes = {
    header: PropTypes.string,
    body: PropTypes.node.isRequired,
    footer: PropTypes.node,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
}

export default ModalGenerator;