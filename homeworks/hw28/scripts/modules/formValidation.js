'use strict';

function validateForm(inputs, validationRegExps, validationErrorMessages) {

    document.querySelectorAll('.error-validation').forEach(el => el.remove());

    let formValidated = true;
    const formData = {};

    Array.from(inputs).forEach(input => {
        const {name, value} = input;
        const wrapper = input.closest('.mb-3');

        if (validationRegExps[name].test(value)) {
            formData[name] = value;
        } else {
            const errBlock = document.createElement('div');
            errBlock.textContent = validationErrorMessages[name];
            errBlock.classList.add('text-danger', 'error-validation');

            if (wrapper) wrapper.append(errBlock);
            formValidated = false;
        }
    });

    return formValidated ? formData : false;
}


export default validateForm;