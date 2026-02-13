'use strict';

import uiVariables from './uiVariables.js';
import profileModel from './profileModel.js';
import errorHandler from './errorHandling.js';

export function initFormEvents() {
    uiVariables.form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorHandler.clearError(uiVariables.errorBlock);

        const [firstNameInput, lastNameInput, emailInput] = uiVariables.inputs;

        uiVariables.inputs.forEach((input) => {
            input.classList.remove('is-invalid')
        });

        try {
            if (Object.isFrozen(profileModel)) {
                throw new Error('Profile is frozen! Changes are not allowed.');
            }

            profileModel.firstName = firstNameInput.value.trim();
            profileModel.lastName = lastNameInput.value.trim();
            profileModel.email = emailInput.value.trim();

            uiVariables.cardTitle.textContent = profileModel.fullName.toString();
            uiVariables.cardEmail.textContent = profileModel.email.toString();
            uiVariables.cardDate.textContent = new Date().toLocaleString();

        } catch (err) {
            errorHandler.showError(err, uiVariables.errorBlock);

            if (err.message.includes('Name')) {
                if (firstNameInput.value.length < 2) firstNameInput.classList.add('is-invalid');
                if (lastNameInput.value.length < 2) lastNameInput.classList.add('is-invalid');
            }

            if (err.message.includes('Email')) {
                emailInput.classList.add('is-invalid');
            }
        }
        uiVariables.form.reset();
    });
}

export function initFreezeButton() {
    uiVariables.freezeModelBtn.addEventListener('click', () => {
        if (Object.isFrozen(profileModel)) {
            alert('Model already frozen');
        } else {
            Object.freeze(profileModel);
            alert('Model has been frozen');
        }
    });
}
