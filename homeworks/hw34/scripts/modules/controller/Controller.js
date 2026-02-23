'use strict';

export class Controller {
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    init(){
        document.addEventListener('DOMContentLoaded', () => {
            this.#onLoadHandler();
            this.#view.form.addEventListener('submit', this.#submitHandler);
            this.#view.itemsContainer.addEventListener('click', this.#deleteItemHandler);
            this.#view.itemsContainer.addEventListener('click', this.#toggleImportant)
            this.#view.clearAllTrigger.addEventListener('click', this.#clearAllHandler);
        })
    }

    #onLoadHandler = () => {
        let savedData = this.#model.readAll();
        console.log(savedData);
        if (savedData < 0) {
            return;
        }
        const arrayFromData = Array(savedData);
        console.log(arrayFromData);
        this.#view.renderItems(arrayFromData);
    }

    #submitHandler = (event) => {
        event.preventDefault();
        const {target: form} = event;
        const inputs = form.querySelectorAll('input:not([type="submit"]), text, textarea, select');
        const data = {};
        inputs.forEach((item) => {
            if (item.name === 'isImportant') {
                if (item.value === 'on') data[item.name] = true;
                data[item.name] = false;
            }else{
                data[item.name] = item.value
            }
        });
        console.log(inputs);
        console.log(data);
        this.#createItem(data);
    }

    #toggleImportant = (id) => {
        this.#model.toggleImportant(id);
        this.#view.toggleImportant(this.#model.get(id));
    }

    #clearAllHandler = () => {
        this.#model.clearAll();
        this.#view.clearAll();
    }

    #deleteItemHandler = (id) => {
        this.#model.delete(id);
        this.#view.delete(id);
    }

    #createItem = (data) => {
        this.#model.create(data);
        this.#view.renderItem(data);
    }
}