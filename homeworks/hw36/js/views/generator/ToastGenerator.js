export const toastGenerator = (message, type = 'danger') => {
    const container = document.querySelector('[data-toast-container]');
    container.innerHTML = `<div class="toast align-items-center text-bg-${type} border-0" role="alert">
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    </div>`;
    const toastEl = container.firstElementChild;
    const toast = new bootstrap.Toast(toastEl);
    toastEl.addEventListener('hidden.bs.toast', () => {
        toastEl.remove();
    });
    return toast;
};
