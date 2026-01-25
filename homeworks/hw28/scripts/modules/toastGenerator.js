let toastInstances = 1;

const createToast = ({
                         title = 'Notification',
                         body = '',
                         id = 'toast',
                         bgClass = 'text-bg-primary',
                         delay = '5000'
                     }) => {
    const toastWrapper = document.createElement('div');
    toastWrapper.className = `toast ${bgClass}`;
    toastWrapper.role = 'alert';
    toastWrapper.ariaLive = 'assertive';
    toastWrapper.ariaAtomic = 'true';
    toastWrapper.id = `${id}_${toastInstances}`;
    toastWrapper.setAttribute('data-bs-delay', delay);

    toastWrapper.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">${title}</strong>
            <small>Just now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${body}
        </div>
    `;

    const container = document.createElement('div');
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(container);
    container.appendChild(toastWrapper);
    
    const bootstrapToast = new bootstrap.Toast(toastWrapper);

    toastInstances += 1;
    return bootstrapToast;
};

export default createToast;
