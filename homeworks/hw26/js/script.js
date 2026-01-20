'use strict';

const form = document.querySelector('[data-form]');

// Variables and regexes for validation:
const regexPasswordHasNumber = /\d/;
const regexPasswordHasLetter = /[a-zA-Z]/;
const passwordLength = 8;

const regexEmailHasAt = /^[^@]+@[^@]+$/;
const regexEmailHasTextBeforeAt = /^[^@]+@/;
const regexEmailHasTextAfterAt = /@[^@]+$/;
const regexEmailHasValidDomain = /@[^@]+(\.[a-zA-Z]{2,})+$/;
//-----------------------------------

const addUserData = (data) => {
    document.querySelector('[data-json-users]').textContent = JSON.stringify(data, null, 2);
};

// Validating functions


const validateEmail = (email) => {
    if (!regexEmailHasAt.test(email)) return 'Email must contain single "@"';
    if (!regexEmailHasTextBeforeAt.test(email)) return 'Email must contain text before @';
    if (!regexEmailHasTextAfterAt.test(email)) return 'Email must contain domain after @';
    if (!regexEmailHasValidDomain.test(email)) return 'Email must contain valid domain';
    return true;
}

const validatePassword = (password) => {
    if (password.length < passwordLength) return 'Password must be at least 8 characters long';
    if (!regexPasswordHasNumber.test(password)) return 'Password must contain at lest one number'
    if (!regexPasswordHasLetter.test(password)) return 'Password must contain at least one letter'
    return true;
}

const checkPasswordConfirm = (password, confirmPassword) => {
    if (password !== confirmPassword) return 'Passwords do not match';
    return true;
}

const validateAge = (age) => {
    if (age < 16 || age > 120) return 'Age must be set in range from 16 to 120';
    return true;
}

const validateCity = (city) => {
    if (!city) return 'City must be selected';
    return true;
}

const validateCheckbox = (checkbox) => {
    if (!checkbox) return 'Checkbox must be selected';
    return true;
}

const validateInputs = (inputs, singleInput = null) => {
    const errors = {};

    const check = (name, value) => {
        let result = true;

        switch (name) {
            case 'email':
                result = validateEmail(value);
                break;
            case 'password':
                result = validatePassword(value);
                break;
            case 'password-confirm':
                result = checkPasswordConfirm(inputs.password, value);
                break;
            case 'age':
                result = validateAge(value);
                break;
            case 'city':
                result = validateCity(value);
                break;
            case 'accept-terms':
                result = validateCheckbox(value);
                break;
        }

        if (result !== true) errors[name] = result;
    };

    if (singleInput) {
        check(singleInput, inputs[singleInput]);
    } else {
        for (const key in inputs) {
            check(key, inputs[key]);
        }
    }

    return Object.keys(errors).length > 0 ? errors : false;
};

// Validation errors handling
const showErrors = (errors) => {
    const inputs = form.querySelectorAll('input, select');
    const errorBoxesTemp = document.querySelectorAll('.error-msg');

    inputs.forEach(el => el.classList.remove('invalid'));
    errorBoxesTemp.forEach(el => el.textContent = '');

    if (!errors) return;

    for (const err in errors) {
        const input = form.querySelector(`[name="${err}"]`);
        const box = document.querySelector(`[data-error="${err}"]`);

        if (box) box.textContent = errors[err];
        if (input) input.classList.add('invalid');
    }
};

// Display JSON on DOMContentLoader
window.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('formData')) || [];
    addUserData(users);

    if (users.length > 0) {
        const last = users[users.length - 1];
        for (const key in last) {
            const input = form.querySelector(`[name="${key}"]`);
            if (!input) continue;
            input.type === 'checkbox' ? input.checked = last[key] : input.value = last[key];
        }
    }
});

// Live-validation on focusout
const allInputs = form.querySelectorAll('input, select');

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('focusout', (e) => {
        const inputTemp = e.target;
        const tempData = {};

        tempData[inputTemp.name] = inputTemp.type === 'checkbox' ? inputTemp.checked : inputTemp.value;

        if (inputTemp.name === 'password-confirm') {
            tempData['password'] = form.querySelector('[name="password"]').value;
        }

        const errors = validateInputs(tempData, inputTemp.name);
        showErrors(errors);
    });
}

// submit-validation
form.addEventListener('submit', e => {
    e.preventDefault();

    const data = {};
    const inputs = e.target.querySelectorAll('input, select');

    let inputTemp;
    for (let i = 0; i < inputs.length; i++) {
        inputTemp = inputs[i];
        data[inputTemp.name] = inputTemp.type === 'checkbox' ? inputTemp.checked : inputTemp.value;
    }

    const errors = validateInputs(data);

    if (errors) {
        form.querySelector(`[name="${Object.keys(errors)[0]}"]`).focus();
        showErrors(errors);
        return;
    }

    showErrors(false);
    form.reset();

    localStorage.setItem('formData', JSON.stringify(data));
    addUserData(data);
});

// Clear button
document.getElementById('reset-btn').addEventListener('click', () => {
    localStorage.removeItem('formData');
    form.reset();
    document.querySelector('[data-json-users]').textContent = '';
})
