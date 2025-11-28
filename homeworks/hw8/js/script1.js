'use strict';

const user = {
    name: "Alex",
    age: 25,
    city: "Kyiv",
    job: "Frontend"
};

const { name, age, city, job } = user;

const shortInfo = { 
    name: name,
    city: city
};

const { name: fullName, city: location } = shortInfo;

const renamed = { 
    fullName: fullName,
    location: location
};

console.log(name, age, city, job);
console.log(shortInfo);
console.log(fullName, location);
console.log(renamed);