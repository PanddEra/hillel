'use strict'

let instances = 1;

const createModal = ({title, id, cssClass}, body, footer) => {
    const wrapper = document.createElement('div');
    wrapper.className = cssClass ? `modal fade ${cssClass}`.trim() : 'modal fade';
    wrapper.tabindex = -1;
    wrapper.setAttribute('aria-labelledby', title)
    wrapper.id = `${id}_${instances}`;


    wrapper.innerHTML = `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${'staticBackdropLabel'}_${instances}">${title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">${body}</div>
                    <div class="modal-footer d-flex justify-content-between">${footer}</div>
                </div>
            </div>`;

    const container = document.querySelector('#modals-container') || document.body;
    container.appendChild(wrapper);

    const bootstrapModalConfig = {
        keyboard: false,
        backdrop: 'static'
    }


    instances += 1;
    return new bootstrap.Modal(wrapper, bootstrapModalConfig);
}

export default createModal;