'use strict'

const cart = [
    { title: "Book", price: 200, qty: 2 },
    { title: "Laptop", price: 30000, qty: 1 }
];

const totalPrice = (cart[0].price * cart[0].qty) + (cart[1].price * cart[1].qty);

const updatedCart = [
    { title: "Book", price: 200, qty: 2 },
    { title: "Laptop", price: 30000, qty: 1 },
    { title: "Pen", price: 20, qty: 5 }
]

const itemNames = updatedCart[0].title + ", " + updatedCart[1].title + ", " + updatedCart[2].title;

console.log(totalPrice);
console.log(updatedCart);
console.log(itemNames);