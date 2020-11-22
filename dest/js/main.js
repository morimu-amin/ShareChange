'use strict';

{
//Shift Change add function
const shiftContainer = document.querySelector('.js-shift-container');
let shiftInputValue = document.querySelector('.js-shift-input');
const shiftAdd = document.querySelector('.js-btn-shift-add');

if(window.localStorage.getItem("todos") == undefined){
  let todos = [];
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

let shiftTodosEX = window.localStorage.getItem("todos");
let shiftTodos = JSON.parse(shiftTodosEX);

class shiftItem{
  constructor(name){
    this.createItem(name);
  }
  createItem(name){
    let itemBox = document.createElement('div');
    itemBox.classList.add('p-list__items','u-list_margin');

    let input = document.createElement('input');
    input.type = "text";
    input.disabled = true;
    input.value = name;
    input.classList.add('p-list__text');

    let remove = document.createElement('p');
    remove.classList.add('p-icons__remove');
    remove.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    remove.addEventListener('click', () =>
      this.remove(itemBox, name));

    shiftContainer.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(remove);

  }

  remove(itemBox, name){
    itemBox.parentNode.removeChild(itemBox);
    let index = shiftTodos.indexOf(name);
    shiftTodos.splice(index, 1);
    window.localStorage.setItem("shiftTodos", JSON.stringify(shiftTodos));
  }
}

shiftAdd.addEventListener('click', shiftCheck);
window.addEventListener('keydown', (e) =>{
    if(e.which == 13){
      shiftCheck();
    }
})

function shiftCheck(){
    if(shiftInputValue.value != ""){
        new shiftItem(shiftInputValue.value);
    shiftTodos.push(shiftInputValue.value);
    window.localStorage.setItem("shiftTodos", JSON.stringify(shiftTodos));
        shiftInputValue.value = "";
    }
}

for (let i = 0; i < shiftTodos.length; i++){
    new shiftItem(shiftTodos[i]);
}

//Others add function
const othersContainer = document.querySelector('.js-others-container');
let othersInputValue = document.querySelector('.js-others-input');
const othersAdd = document.querySelector('.js-btn-others-add');

if(window.localStorage.getItem("todos") == undefined){
  let todos = [];
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

let othersTodosEX = window.localStorage.getItem("todos");
let othersTodos = JSON.parse(othersTodosEX);

class othersItem{
  constructor(name){
    this.createItem(name);
  }
  createItem(name){
    let itemBox = document.createElement('div');
    itemBox.classList.add('p-list__items','u-list_margin');

    let input = document.createElement('input');
    input.type = "text";
    input.disabled = true;
    input.value = name;
    input.classList.add('p-list__text');

    let remove = document.createElement('p');
    remove.classList.add('p-icons__remove');
    remove.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    remove.addEventListener('click', () =>
      this.remove(itemBox, name));

    othersContainer.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(remove);

  }

  remove(itemBox, name){
    itemBox.parentNode.removeChild(itemBox);
    let index = othersTodos.indexOf(name);
    othersTodos.splice(index, 1);
    window.localStorage.setItem("othersTodos", JSON.stringify(othersTodos));
  }
}

othersAdd.addEventListener('click', othersCheck);
window.addEventListener('keydown', (e) =>{
    if(e.which == 13){
      othersCheck();
    }
})

function othersCheck(){
    if(othersInputValue.value != ""){
        new othersItem(othersInputValue.value);
    othersTodos.push(othersInputValue.value);
    window.localStorage.setItem("othersTodos", JSON.stringify(othersTodos));
        othersInputValue.value = "";
    }
}

for (let i = 0; i < othersTodos.length; i++){
    new othersItem(othersTodos[i]);
}

//Date function
document.getElementById('js-getToday').textContent = getToday();

function getToday(){
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
	const date = now.getDate();
	const day = now.getDay();

  const dayName = new Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.");
  const monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");
  const dateView = monthName[month] + " " + date + ", " + year + " ( " + dayName[day]+ " )";
  return dateView;

  }
}
