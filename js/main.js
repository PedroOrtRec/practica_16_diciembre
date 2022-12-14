const arrayTasks = new Array({
    idTask: 0,
    title: 'Hacer prácticas',
    priority: 'urgent',
}, {
    idTask: 1,
    title: 'Repasar apuntes',
    priority: 'daily',
}, {
    idTask: 2,
    title: 'Ampliar información',
    priority: 'monthly',
});



let sectionTasks = document.querySelector('.tasks');
let addButton = document.querySelector('#add_button');
let textAdd = document.querySelector('#text_add');
let priorityAdd = document.querySelector('#priority_add');
let textSearch = document.querySelector('#text_search');
let prioritySearch = document.querySelector('#priority_search');
let idTask = 2;
let spanUserName = document.querySelector('#user');

let userName = prompt('Escriba su nombre de usuario (al aceptar, acepta las cookies, buajaja)');
userName = userName.toUpperCase();
spanUserName.innerText = userName;


addButton.addEventListener('click', getValues);

function getValues() {
    id = id++;
    let title = textAdd.value;
    let priority = priorityAdd.value;
    if (priority !== 'none') {
        pushTask(id, title, priority);
    }
    else {
        alert('Elige una prioridad para la tarea')
    };
    textAdd.value = '';
    priorityAdd.value = 'none';

};

function pushTask(pId, pTitle, pPriority) {
    let newTask = {
        idTask: pId,
        title: pTitle,
        priority: pPriority,
    }
    localStorage.setItem('task' + '_' + pId, JSON.stringify(newTask));
    // arrayTasks.push(newTask);
}