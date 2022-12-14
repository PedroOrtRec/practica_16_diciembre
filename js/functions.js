function printTasks(pArray, pDom) {
    pArray.forEach(task => printOneTask(task, pDom));
}
function printOneTask(pTask, pDom) {
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
    button.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    });
    pDom.appendChild(article);
    article.appendChild(h3);
    article.appendChild(button);
}

printTasks(defaultArray, sectionTasks);

addButton.addEventListener('click', addTask);

function addTask() {
    let title = textAdd.value;
    let priority = priorityAdd.value;
    if (priority !== 'none') {
        const newTask = new Task(title, priority);
        printOneTask(newTask, sectionTasks);
    }
    else {
        alert('Elige una prioridad para la tarea')
    }
    textAdd.value = '';
    priorityAdd.value = 'none'
}