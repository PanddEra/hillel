
const todoItemValidationModel = {
    title: 'string',
    category: ['work', 'study', 'personal'],
    important: 'boolean',
    createdAt: 'string',
}


const modelInstance = new Model('todo-list', todoItemValidationModel);
const viewInstance = new View();

const controllerInstance = new Controller(modelInstance, viewInstance);
controllerInstance.init()