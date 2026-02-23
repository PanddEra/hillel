export class View {
    itemsContainer = document.querySelector('[data-items-conatiner]');
    form = document.querySelector('[data-form]');
    clearAllTrigger = document.querySelector('[data-deleteAll-btn]');
    constructor() {

    }

    #addNoDataToDisplayBlock = () => {
        this.itemsContainer.textContent = `
<div class="alert alert-warning" role="alert">
  NO DATA TO DISPLAY!
</div>`;
    }

    #removeNoDataFromDisplayBlock = () => {
        this.itemsContainer.textContent = ``;
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
${!isImportant ? `<span class="badge text-bg-warning">Important</span>` : ''}
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
        if(data === '') {
            this.#addNoDataToDisplayBlock();
            return;
        }
        console.log(data)
        const itemsContainerClone = this.itemsContainer.cloneNode();
        data.forEach((item) => {
            const template = this.#createItemTemplate(item);
            itemsContainerClone.appendChild(template);
        })

        this.#removeNoDataFromDisplayBlock();
        this.itemsContainer.replaceWith(itemsContainerClone);
        this.itemsContainer = itemsContainerClone;
    }

    renderItem = (item) => {
        if(this.containerIsEmpty()) this.#removeNoDataFromDisplayBlock();
        this.itemsContainer.appendChild(item);
    }

    toggleImportant = (id) => {
        const elementToUpdate = this.itemsContainer.querySelector(`[data-id="${id}"]`);
        const newItem = this.#createItemTemplate(elementToUpdate)
        newItem.isImportant ? newItem.isImportant = false : newItem.isImportant = true;
        elementToUpdate.replaceWith(newItem);
    }

    clearAll = () => {
        this.itemsContainer.textContent = '';
        this.#addNoDataToDisplayBlock();
    }

    delete = (id) => {
        this.itemsContainer.querySelector(`[data-id='.${id}']`).remove();
        if(this.containerIsEmpty()) this.#addNoDataToDisplayBlock();

    }

    containerIsEmpty = () => {
        return !!this.itemsContainer;
    }
}