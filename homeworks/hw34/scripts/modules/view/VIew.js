export class View {
    itemsContainer = document.querySelector('[data-items-container]');
    form = document.querySelector('[data-form]');
    clearAllTrigger = document.querySelector('[data-deleteAll-btn]');

    constructor() {

    }

    #addNoDataToDisplayBlock = () => {
        const noDataToDisplay = `<div class="alert alert-warning d-flex justify-content-center align-items-center w-100" role="alert">NO DATA TO DISPLAY!</div>`;
        this.itemsContainer.innerHTML = noDataToDisplay;
    }

    #clearContainer = () => {
        this.itemsContainer.removeChild(this.itemsContainer.firstChild);
    }

    #createItemTemplate({title, category, isImportant, id}) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');
        wrapper.setAttribute('data-id', id);

        wrapper.innerHTML = `
         <div class="wrapper">
              <div class="card" style="width: 18rem;">
                   <div class="card-body">
                        <h5 class="card-title">
${title}
${isImportant ? `<span class="badge text-bg-warning">Important</span>` : ''}
</h5>
                        <p class="">${category}</p>
                        <button type="button" class="btn btn-warning" data-toggleImportant-btn>Toggle important</button>
                        <button type="button" class="btn btn-danger" data-deleteItem-btn>Delete</button>
                   </div>
              </div>
         </div>
`;

        return wrapper;
    }

    renderItems(data) {
        if (!data || data.length === 0) {
            this.#addNoDataToDisplayBlock();
            return;
        }
        const itemsContainerClone = this.itemsContainer.cloneNode();
        data.forEach((item) => {
            const template = this.#createItemTemplate(item);
            itemsContainerClone.appendChild(template);
        })

        this.#clearContainer();
        this.itemsContainer.replaceWith(itemsContainerClone);
        this.itemsContainer = itemsContainerClone;
    }

    renderItem = (item) => {
        if (this.containerIsEmpty() || this.itemsContainer.innerHTML === `<div class="alert alert-warning d-flex justify-content-center align-items-center w-100" role="alert">NO DATA TO DISPLAY!</div>`) {
            this.#clearContainer();
        }

        const template = this.#createItemTemplate(item);
        this.itemsContainer.appendChild(template);
    }

    updateItem(note) {
        const oldElement = this.itemsContainer.querySelector(`[data-id="${note.id}"]`);
        const newElement = this.#createItemTemplate(note);
        oldElement.replaceWith(newElement);
    }

    clearAll = () => {
        this.itemsContainer.textContent = ' ';
        this.#addNoDataToDisplayBlock();
    }

    delete = (id) => {
        this.itemsContainer.querySelector(`[data-id='${id}']`).remove();
        if (this.containerIsEmpty()) this.#addNoDataToDisplayBlock();

    }

    containerIsEmpty = () => {
        return this.itemsContainer.children.length === 0;
    }
}
