'use strict'

const user = {
    _firstName: '',
    _lastName: '',
    createdAt: Date.now(),

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    },

    set fullName(fullName) {
        if (!this._validateFullNameInputs(fullName)) {
            throw new Error('Full Name is not valid!');
        } else {
            const [first, last] = fullName.trim().split(' ');
            this._firstName = first;
            this._lastName = last;
        }
    },
    _validateFullNameInputs(fullName) {
        if (typeof fullName !== 'string') return false;
        
        const parts = fullName.trim().split(' ');
        if (parts.length !== 2) return false;
        
        if (parts[0].length < 2 || parts[1].length < 2) return false;
        
        return true;
    },
    
    lockProfile() {
        Object.seal(this);
    },
    lockHard(){
        Object.freeze(this);
    }
}

Object.defineProperties(user, {
    _firstName: {
        enumerable: false,
    },
    _lastName: {
        enumerable: false,
    },
    createdAt: {
        writable: false,
        configurable: false,
    },
    fullName: {
        configurable: false,
        enumerable: true,
    }
})

user.fullName = 'First Last';
console.log(user.fullName);
console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.keys(user));

// user.lockProfile();
// console.log("Is sealed: " + Object.isSealed(user));
// console.log(user.createdAt = new Date("2025.11.11"));
// console.log(delete user.fullName);
// console.log(Object.keys(user));

user.lockHard();
console.log("Is frozen: " + Object.isFrozen(user));
console.log(user.createdAt = new Date("2025.11.11"));
console.log(delete user.fullName);
