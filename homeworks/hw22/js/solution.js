const ul = document.getElementById("ulId");
const liElements = ul.getElementsByTagName("li");

let liArray = [];
for (const li of liElements) {
    liArray.push(li.innerText);
}
console.log("Const of elements: " + liElements.length);
console.log(liArray);