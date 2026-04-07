export const modalGenerator = (modalTitle, modalBody, modalFooter) => {
    return <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{modalTitle ?? null}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    {modalBody ?? null}
                </div>
                <div className="modal-footer">
                    {modalFooter ?? null}
                </div>
            </div>
        </div>
    </div>
}