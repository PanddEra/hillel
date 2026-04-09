
export const modalGenerator = (modalTitle, modalBody, modalFooter) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('modal-wrapper');
    wrapper.innerHTML = `
        <div class="modal fade" id=${crypto.randomUUID()}">
            <div class="modal-dialog">
               <div class="modal-content">
                   <div class="modal-header">
                   ${modalTitle ? `<h1 class="modal-title fs-5">${modalTitle}</h1>` : ''}
                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                   </div>
                   ${modalBody ? `<div class="modal-body">${modalBody}</div>` : ''}
                   ${modalFooter ? `<div class="modal-footer d-flex justify-content-between">${modalFooter}</div>` : ''}
                </div>
            </div>
        </div>`;

    document.body.appendChild(wrapper);
    const modal = new bootstrap.Modal(wrapper.firstElementChild);
    return modal;
}