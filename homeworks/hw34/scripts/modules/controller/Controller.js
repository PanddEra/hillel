'use strict';

import createModal from "../../../../hw28/scripts/modules/modalGenerator";

class Controller {
    _currentItemId = 0;
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    #onLoadHandler = () => {
        const savedData = this.#model.readAll()
        if (!savedData.length) {
            return;
        }
        
        //TODO
    }

    #submitHandler = (event) => {
        event.preventDefault();
        const {target: form} = event;
        const inputs = form.querySelectorAll('input:not([type="submit"]), textarea, select');
        const data = {};
        inputs.forEach(({name, value}) => data[name] = value);
        this.#createItem(data);
    }

    #clearAllHandler = () => {
        this.#model.clearAll();
    }

    #deleteItemHandler = (id) => {
        this.#model.delete(id);
    }

    #createItem = (data) => {
        this.#model.create(data);
    }
}