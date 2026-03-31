import Modal from 'react-bootstrap/Modal';

function ModalGenerator({header, body, footer}) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{header || null}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {body || null}
                </Modal.Body>

                <Modal.Footer>
                    {footer || null}
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalGenerator;