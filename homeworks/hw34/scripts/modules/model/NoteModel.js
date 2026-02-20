'use strict';

import {StorageModel} from "./StorageModel";

class NoteModel extends StorageModel {
    #notesList = null;
    #validationModel = null;

    constructor(validationModel) {
        this.#notesList = [];
        this.#validationModel = validationModel;
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
        if (!this._hasItem(data)) {
            this.#validateNote(data);
            this.#notesList.push(data);
            this._setItem(data);
        } else {
            //TODO error handling
        }

    }

    readAll() {
        return this._getAll();
    }

    toggleImportant(id) {
        if (this._hasItem(this.#notesList[this.#findIndexInNotesList(id)])) {
            const indexInArray = this.#findIndexInNotesList(id);
            indexInArray.state = this.state === 'important' ? 'none' : 'important';
            this._setItem(indexInArray);
        } else {
            //TODO error handling
        }

    }

    delete(id) {
        if (this._hasItem(this.#notesList[this.#findIndexInNotesList(id)])) {
            const indexInArray = this.#findIndexInNotesList(id);
            this.#notesList.splice(indexInArray, 1);
            this._setItem(indexInArray);
        } else {
            //TODO error handling
        }
    }

    clearAll() {
        this._clearAll();
    }
}