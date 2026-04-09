export const modalGenerator = (modalTitle, modalBody, modalFooter) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('modal-wrapper');

    const id = crypto.randomUUID();

    wrapper.innerHTML = `
        <div class="modal fade" id="${id}">
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

    const modalEl = wrapper.firstElementChild;
    const modal = new bootstrap.Modal(modalEl);

    modalEl.addEventListener('hidden.bs.modal', () => {
        wrapper.remove();
    });

    return {
        modal,
        wrapper,
    };
};