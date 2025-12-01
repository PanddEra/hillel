'use strict';

const email = prompt('Enter your email address: ');
const password = prompt('Enter your password: ');
const isEmailVerified = prompt('Is your email was verified?(yes/no)').trim().toLowerCase() === 'yes';

const canLogin = email.trim().length > 0 && password.trim().length > 0 && isEmailVerified;
console.log(canLogin ? "Login successfully" : "Login unsuccessfully");