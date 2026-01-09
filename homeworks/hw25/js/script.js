'use strict';

const addBtn = document.getElementById("add-btn");
const input = document.getElementById("input");
const list = document.querySelector(".list");


addBtn.addEventListener('click', function() {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement("li");
    li.textContent = text;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "✖";
    delBtn.className = "delete-btn";
    
    list.appendChild(li);
    li.appendChild(delBtn);
    
    input.value = "";
    console.log("list element added");
});

list.addEventListener("click", function(event) {
    if(event.target.className === "delete-btn") {
        event.target.closest("li").remove();
        console.log("list element deleted")
        return;
    }
    
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("selected");
        console.log("list element selected");
    }
});