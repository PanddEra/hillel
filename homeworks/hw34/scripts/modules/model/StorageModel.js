'use strict';

export class StorageModel {
    key = null;

    constructor() {

    }

    #get() {
        return JSON.parse(
            localStorage.getItem(this.key)
        )
    }

    #setItem(data) {
        return localStorage.setItem(
            this.key,
            JSON.stringify(data)
        );
    }

    #hasItem(data) {
        data = localStorage.getItem(this.key);
        return data !== null;
    }

    _clearAll() {
        localStorage.removeItem(this.key);
    }

    _getAll() {
        return this.#get();
    }

    _setItem(data) {
        this.#setItem(data);
    }

    _hasItem(id) {
        const data = this.#get();
        return data && data.some(item => item.id === id);
    }
}