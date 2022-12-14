let sectionTasks = document.querySelector('.tasks');
let addButton = document.querySelector('#add_button');
let textAdd = document.querySelector('#text_add');
let priorityAdd = document.querySelector('#priority_add');
let textSearch = document.querySelector('#text_search');
let prioritySearch = document.querySelector('#priority_search');
let spanUserName = document.querySelector('#user');

let userName = prompt('Nombre de Usuario');
userName = userName.toUpperCase();
spanUserName.innerText = userName;