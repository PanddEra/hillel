'use strict';

const errorHandler = {
    showError(error, errorBlock) {
        errorBlock.textContent = error.message;
    },
    clearError(errorBlock) {
        errorBlock.textContent = '';
    }
}

export default errorHandler;