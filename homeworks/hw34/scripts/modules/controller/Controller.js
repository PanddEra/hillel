'use strict';

class Controller {
    _currentItemId = 0;
    constructor(){}


    #submitHandler = (event) => {
        event.preventDefault();
        const {target: form} = event;
        const inputs = form.querySelectorAll('input:not([type="submit"]), textarea, select');
        const data = {};
        inputs.forEach(({name, value}) => data[name] = value);
        if(!this.#validateData(data)) return;
        
    }
    
    #validateData = (data) => {
        
    }
}