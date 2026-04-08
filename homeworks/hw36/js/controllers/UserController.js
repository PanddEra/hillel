class UserController{
    model = null;
    view = null;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init(){
        document.addEventListener('DOMContentLoaded', async () => {
            const users = await this.model.getAll();
            this.view.renderTable(users);
            this.view.createUserTrigger.addEventListener('click', () => this.#handleAddClick());
            document.addEventListener('click', (event) => {
                if (event.target.dataset.editUser) {
                    this.#handleEditClick(event.target.dataset.editUser);
                }

                if (event.target.dataset.deleteUser) {
                    this.#handleDeleteClick(event.target.dataset.deleteUser);
                }
            });
        })
    }
    #handleAddClick(){
        this.view.openCreateModal();
        this.view.createUserForm.addEventListener('submit', (event) => this.#handleCreateSubmit(event));
    }
    async #handleCreateSubmit(event){
        event.preventDefault();
        const formData = new FormData(this.view.createUserForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            id: this.model.users.length + 1,
        };
        this.view.createUserForm.reset();
        await this.model.create(data);
        const users = this.model.users;
        this.view.renderTable(users);
    }
    #handleEditClick(id){
        const user = this.model.users.find(u => Number(u.id) === Number(id));
        this.view.openEditModal(user);
        this.view.editUserForm.addEventListener('submit', (event) => this.#handleEditSubmit(id, event));
    }
    async #handleEditSubmit(id, event){
        event.preventDefault();
        const formData = new FormData(this.view.editUserForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
        }
        await this.model.update(id, data);
        const users = this.model.users;
        this.view.renderTable(users);
    }
    #handleDeleteClick(id){
        const user = this.model.users.find(u => Number(u.id) === Number(id));
        this.view.openDeleteModal(user);
        this.view.confirmDeleteUserTrigger.addEventListener('click', () => this.#handleDeleteConfirm(id));
    }
    async #handleDeleteConfirm(id){
        await this.model.delete(id);
        const users = this.model.users;
        this.view.renderTable(users);
    }
}
export default UserController;