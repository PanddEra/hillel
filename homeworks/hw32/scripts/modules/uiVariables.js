'use strict';

const uiVariables = {
    form: document.querySelector('[data-form]'),
    inputs: document.querySelectorAll('[data-form] input'),
    errorBlock: document.querySelector('.error-block'),
    freezeModelBtn: document.getElementById('freezeModel'),
    cardTitle: document.querySelector('.card-header'),
    cardEmail: document.querySelector('.card-title'),
    cardDate: document.querySelector('.card-text')
};

export default uiVariables;
