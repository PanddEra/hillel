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
        const savedData = this.#model.readAll();
        if (!savedData || savedData.length === 0) {
            this.#view.clearAll();
            return;
        }
        this.#view.renderItems(savedData);
    }

    #submitHandler = (event) => {
        event.preventDefault();
        const {target: form} = event;
        const formData = new FormData(form);
        const data = {
            id: crypto.randomUUID(),
            title: formData.get('title'),
            category: formData.get('category'),
            isImportant: formData.get('isImportant') === 'on',
            createdAt: new Date().toISOString()
        };
        this.#createItem(data);
        form.reset();
    }

    #toggleImportant = (event) => {
        const btn = event.target.closest('[data-toggleImportant-btn]');
        if (!btn) return;

        const item = btn.closest('[data-id]');
        const id = item.dataset.id;

        this.#model.toggleImportant(id);

        const updated = this.#model.readAll().find(n => n.id === id);
        this.#view.updateItem(updated);
    }

    #clearAllHandler = () => {
        this.#model.clearAll();
        this.#view.clearAll();
    }

    #deleteItemHandler = (event) => {
        const btn = event.target.closest('[data-deleteItem-btn]');
        if (!btn) return;

        const item = btn.closest('[data-id]');
        const id = item.dataset.id;

        this.#model.delete(id);
        this.#view.delete(id);
    }

    #createItem = (data) => {
        if (data.title.trim().length < 3) {
            alert('Title must be at least 3 characters');
            return;
        }
        this.#model.create(data);
        this.#view.renderItem(data);
    }
}
