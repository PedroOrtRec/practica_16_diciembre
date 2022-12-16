const defaultArray = new Array({
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
let sectionAlerts = document.querySelector('.alerts')
let addButton = document.querySelector('#add_button');
let textAdd = document.querySelector('#text_add');
let priorityAdd = document.querySelector('#priority_add');
let textSearch = document.querySelector('#text_search');
let prioritySearch = document.querySelector('#priority_search');
let id = 3;
let spanUserName = document.querySelector('#user');



addButton.addEventListener('click', getValues);

textSearch.addEventListener('keydown', filterByName);

prioritySearch.addEventListener('change', filterByPriority)

function filterByName(event) {
    if (event.keyCode === 13) {
        let filterArray = pullArrays();
        filterArray = filterArray.filter(task => task.title.toLowerCase().includes(textSearch.value.toLowerCase()));
        printTasks(filterArray, sectionTasks);
    }
}

function filterByPriority(event) {
    if (event.target.value != 'all') {
        let filterArray = pullArrays();
        filterArray = filterArray.filter(task => task.priority === event.target.value);
        printTasks(filterArray, sectionTasks);
    } else {
        printTasks(pullArrays(), sectionTasks);
    }
}

function startUser() {
    let verificationUser = localStorage.getItem('userName16');
    if (verificationUser === null) {
        let userName = prompt('Escriba su nombre de usuario');
        localStorage.setItem('userName16', userName);
        userName = localStorage.getItem('userName16').toUpperCase();
        spanUserName.innerText = userName;
    } else {
        userName = localStorage.getItem('userName16').toUpperCase();
        spanUserName.innerText = userName;
    }
}

function startTasks() {
    let verificationArray = localStorage.getItem('arrayTasks16');
    if (verificationArray === null) {
        pushArrays(defaultArray);
        printTasks(pullArrays(), sectionTasks);
    } else {
        printTasks(pullArrays(), sectionTasks);
    }
}

function pushArrays(pArray) {
    localStorage.setItem('arrayTasks16', JSON.stringify(pArray));
}

function pullArrays() {
    let arrayTasks = JSON.parse(localStorage.getItem('arrayTasks16'));
    return arrayTasks;
}

function printTasks(pArray, pDom) {
    pDom.innerText = '';
    pArray.forEach(task => printOneTask(task, task.idTask, pDom));
}

function printOneTask(pTask, pIdTask, pDom) {
    let article = document.createElement('article');
    article.className += 'one_task';
    switch (pTask.priority) {
        case 'urgent':
            article.className += ' urgent_task';
            break;
        case 'daily':
            article.className += ' daily_task';
            break;
        case 'monthly':
            article.className += ' monthly_task';
            break;
    }

    let h3 = document.createElement('h3');
    h3.innerText = pTask.title;
    let button = document.createElement('button');
    button.innerText = 'Eliminar';
    button.dataset.dataid = pIdTask;
    button.addEventListener('click', removeTask);
    pDom.appendChild(article);
    article.appendChild(h3);
    article.appendChild(button);
}

function removeTask(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    let preDelArray = pullArrays();
    console.log(preDelArray);
    let posDelArray = preDelArray.filter((task) => task.idTask != event.target.dataset.dataid);
    pushArrays(posDelArray);
}

function getValues() {
    let title = textAdd.value;
    let priority = priorityAdd.value;
    if (priority !== 'none') {
        addTask(title, priority);
        textAdd.value = '';
        priorityAdd.value = 'none';
    }
    else {
        alert('Elige una prioridad para la tarea')
    };
};

function addTask(pTitle, pPriority) {
    let addArray = pullArrays();
    let newId = addArray.length;
    addArray.push({
        'idTask': newId,
        'title': pTitle,
        'priority': pPriority
    });
    pushArrays(addArray);
    printTasks(pullArrays(), sectionTasks);
    printAlerts(sectionAlerts);
}

function printAlerts(pDom) {
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.className += 'alert_text'
    h4.innerText = 'Se ha añadido una nueva tarea'
    article.className += 'alert_pop'
    pDom.appendChild(article);
    article.appendChild(h4);
}

// function smallerTask(event) {
//     event.target.parentNode.className += ' smaller_task';
// }

startTasks();
startUser();