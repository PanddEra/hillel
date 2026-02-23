'use strict';

import {StorageModel} from "./StorageModel.js";

export class NoteModel extends StorageModel {
    #notesList = null;
    #validationModel = null;

    constructor(validationModel) {
        super();
        this.key = 'notes';
        this.#validationModel = validationModel;

        const saved = this._getAll();
        this.#notesList = saved ? saved : [];
    }

    #validateNote(data) {
        const failedFields = [];
        for (const key in data) {
            if (!this.#validationModel.hasOwnProperty(key)) {
                failedFields.push({key, message: `Field doesn't exist on validation model`});
                continue
            }

            if (Array.isArray(this.#validationModel[key]) && !this.#validationModel[key].includes(data[key])) {
                failedFields.push({key, message: `Field should be one of ${this.#validationModel[key]}`});
                continue
            }

            if (!Array.isArray(this.#validationModel[key]) && typeof data[key] !== this.#validationModel[key]) {
                failedFields.push({key, message: `Field should be in type of ${this.#validationModel[key]}`});
            }

        }

        if (failedFields.length) {
            throw new Error(`Failed to validate entity: ${JSON.stringify(failedFields)}`);
        }

        return true;
    }

    #findIndexInNotesList(id) {
        return this.#notesList.findIndex(el => el.id === id);
    }

    create(data) {
        this.#validateNote(data);
        this.#notesList.push(data);
        this._setItem(this.#notesList); // Save the entire list
    }

    readAll() {
        return this._getAll();
    }

    toggleImportant(id) {
        const index = this.#findIndexInNotesList(id);
        if (index === -1) return;

        this.#notesList[index].isImportant =
            !this.#notesList[index].isImportant;

        this._setItem(this.#notesList);
    }

    delete(id) {
        const index = this.#findIndexInNotesList(id);
        if (index !== -1) {
            this.#notesList.splice(index, 1);
            this._setItem(this.#notesList);
        }
    }

    clearAll() {
        this.#notesList = [];
        this._clearAll();
    }
}