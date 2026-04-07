class UserController{
    model = null;
    view = null;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init(){
        document.addEventListener('DOMContentLoaded', () => {
            this.view.renderTable()
        })
    }
    #handleAddClick(){}
    #handleCreateSubmit(){}
    #handleEditClick(id){}
    #handleEditSubmit(){}
    #handleDeleteClick(id){}
    #handleDeleteConfirm(){}
}