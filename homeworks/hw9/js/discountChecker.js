'use strict';

const hasPromoCode = prompt('Do you have any promo code? (yes/no)').trim().toLowerCase() === 'yes';
const cartTotal = Number(prompt('Total sum in your cart: '));
const isBlackFriday = prompt('Is Black Friday today? (yes/no)').trim().toLowerCase() === 'yes';

const isDiscountApplied = (cartTotal >= 100 && hasPromoCode) || isBlackFriday;

const noDiscount = !isDiscountApplied;

console.log(isDiscountApplied ? 'Discount Applied' : 'Discount Is Not Applied');