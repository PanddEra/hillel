class UserController {
    model = null;
    view = null;

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        document.addEventListener('DOMContentLoaded', async () => {
            await this.#submitHandlerHelper(async () => {
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
            });
        });
    }

    #handleAddClick() {
        this.view.openCreateModal();
        this.view.createUserForm.addEventListener('submit', (event) => this.#handleCreateSubmit(event));
    }

    async #handleCreateSubmit(event) {
        event.preventDefault();
        await this.#submitHandlerHelper(async () => {
            const user = this.#generateUserFromForm(this.view.createUserForm);
            const errors = this.#validateUser(user);
            if (errors.length) {
                this.view.showFormErrors(this.view.createUserForm, errors);
                return;
            }
            this.view.createUserForm.reset();
            await this.model.create(user);
            this.view.renderTable(this.model.users);
            this.view.showToast('User created successfully', 'success');
        });
    }

    #handleEditClick(id) {
        const user = this.model.users.find(u => Number(u.id) === Number(id));
        this.view.openEditModal(user);
        this.view.editUserForm.addEventListener('submit', (event) => this.#handleEditSubmit(id, event));
    }

    async #handleEditSubmit(id, event) {
        event.preventDefault();
        await this.#submitHandlerHelper(async () => {
            const user = this.#generateUserFromForm(this.view.editUserForm);
            await this.model.update(id, user);
            this.view.renderTable(this.model.users);
            this.view.showToast('User updated successfully', 'success');
        });
    }

    #handleDeleteClick(id) {
        const user = this.model.users.find(u => Number(u.id) === Number(id));
        this.view.openDeleteModal(user);
        this.view.confirmDeleteUserTrigger.addEventListener('click', () => this.#handleDeleteConfirm(id));
    }

    async #handleDeleteConfirm(id) {
        await this.#submitHandlerHelper(async () => {
            await this.model.delete(id);
            this.view.renderTable(this.model.users);
            this.view.showToast('User deleted successfully', 'success');
        });
    }


    async #submitHandlerHelper(callback) {
        try {
            this.view.setLoading(true);
            await callback();
        } catch (e) {
            this.view.showToast(e?.message || 'Something went wrong', 'danger');
        } finally {
            this.view.setLoading(false);
        }
    }

    #generateUserFromForm(form) {
        const formData = new FormData(form);
        return {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
        };
    }
    #validateUser(user){
        const errors = [];
        if (!user.name) errors.push('Enter valid name');
        if (!user.email || !/.+@.+\..+/.test(user.email)) errors.push('Enter valid email');
        return errors;
    }
}

export default UserController;