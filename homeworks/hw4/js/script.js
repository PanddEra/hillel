const startPrice = Number(prompt("Enter product price:"));
const discount = Number(prompt("Enter product discount(%):"));

if (isNaN(startPrice) || isNaN(discount) || discount < 0 || startPrice < 0) {
    alert("Please enter a valid product price or discount");
} else {
    const finalPrice = startPrice - (startPrice / 100) * discount;
    alert(`Start price is ${startPrice} and discount is ${discount}%\nPrice with discount is ${finalPrice}`);
}
