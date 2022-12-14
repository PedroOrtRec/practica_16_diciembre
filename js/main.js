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

localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));


let sectionTasks = document.querySelector('.tasks');
let addButton = document.querySelector('#add_button');
let textAdd = document.querySelector('#text_add');
let priorityAdd = document.querySelector('#priority_add');
let textSearch = document.querySelector('#text_search');
let prioritySearch = document.querySelector('#priority_search');
let id = 3;
let spanUserName = document.querySelector('#user');

let userName = prompt('Escriba su nombre de usuario');
userName = userName.toUpperCase();
spanUserName.innerText = userName;


addButton.addEventListener('click', getValues);

function getValues() {
    let title = textAdd.value;
    let priority = priorityAdd.value;
    if (priority !== 'none') {
        pushTask(title, priority);
        // printTasks(arrayTasks, sectionTasks);
    }
    else {
        alert('Elige una prioridad para la tarea')
    };
    textAdd.value = '';
    priorityAdd.value = 'none';

};

function pushTask(pTitle, pPriority) {
    let newTask = {
        idTask: id,
        title: pTitle,
        priority: pPriority,
    }
    // localStorage.setItem('task' + '_' + id, JSON.stringify(newTask));
    arrayTasks.push(newTask);
    id = ++id;
    localStorage.removeItem('arrayTasks');
    localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
}




// function printTasks(pArray, pDom) {
//     pArray.forEach(task => printOneTask(task, pDom));
// }

// function printOneTask(pTask, pDom) {

//     let article = document.createElement('article');
//     article.className += 'one_task';
//     switch (pTask.priority) {
//         case 'urgent':
//             article.className += ' urgent_task';
//             break;
//         case 'daily':
//             article.className += ' daily_task';
//             break;
//         case 'monthly':
//             article.className += ' monthly_task';
//             break;
//     }
//     let h3 = document.createElement('h3');
//     h3.innerText = pTask.title;
//     let button = document.createElement('button');
//     button.innerText = 'Eliminar';
//     button.addEventListener('click', (event) => {
//         event.target.parentNode.parentNode.removeChild(event.target.parentNode);
//     });
//     pDom.appendChild(article);
//     article.appendChild(h3);
//     article.appendChild(button);
// }