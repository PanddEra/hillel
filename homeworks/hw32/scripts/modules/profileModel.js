'use strict';

const profileModel = {};

Object.defineProperties(profileModel, {
    _firstName: {
        writable: true,
        enumerable: false,
        configurable: false
    },
    _lastName: {
        writable: true,
        enumerable: false,
        configurable: false
    },
    _email: {
        writable: true,
        enumerable: false,
        configurable: false
    },
    _validateName: {
        value: (name) => {
            if (name.length >= 2) return true;
            throw new Error('Name must be at least 2 characters');
        },
        writable: false,
        enumerable: false,
        configurable: false

    },
    _validateEmail: {
        value: (email) => {
            if (/@.+\./.test(email)) return true;
            throw new Error('Email format is invalid');
        },
        writable: false,
        enumerable: false,
        configurable: false
    },
    firstName: {
        get() {
            return this._firstName;
        },
        set(value) {
            this._validateName(value);
            this._firstName = value;
        }
    },
    lastName: {
        get() {
            return this._lastName;
        },
        set(value) {
            this._validateName(value);
            this._lastName = value;
        }
    },
    email: {
        get() {
            return this._email;
        },
        set(value) {
            this._validateEmail(value);
            this._email = value;
        }
    },
    fullName: {
        get() {
            return `${this._firstName} ${this._lastName}`;
        }
    }
});

export default profileModel;
