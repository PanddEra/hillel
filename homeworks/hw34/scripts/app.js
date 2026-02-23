'use strict';

import {NoteModel} from "./modules/model/NoteModel.js";
import {View} from "./modules/view/View.js";
import {Controller} from "./modules/controller/Controller.js";
const notesValidationModel = {
    title: 'string',
    category: ['work', 'study', 'personal'],
    isImportant: 'boolean',
    createdAt: 'string',
}


const modelInstance = new NoteModel(notesValidationModel);
const viewInstance = new View();

const controllerInstance = new Controller(modelInstance, viewInstance);
controllerInstance.init()