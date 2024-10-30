const completedTaskListContainer = document.getElementById('completed-tasks')
const incompleteTaskListContainer = document.getElementById('incomplete-tasks')
const taskInput = document.getElementById('task-input')
const taskCreateBtn = document.getElementById('list-create-btn')
const errorMessage = document.getElementById('error-message')

class Task {
    constructor(name, completed = false) {
        this.name = name;
        this.completed = completed;
    }
}

const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

taskCreateBtn.addEventListener('click', () => {
    errorMessage.textContent = '';
    if (!taskInput.value) return;

    if (tasks.some(task => task.name === taskInput.value)) {
        errorMessage.textContent = 'Une tâche avec ce nom existe déjà';
        return;
    }

    const task = new Task(taskInput.value);
    tasks.push(task);
    saveTasks();
    taskInput.value = '';
    addTask(task);
});

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function initTasks() {
    tasks.forEach(addTask);
}

function addTask(task) {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');

    const taskName = document.createElement('input');
    taskName.value = task.name;
    taskName.disabled = true
    taskName.style.border = 'none'
    taskName.style.backgroundColor = 'transparent'
    taskName.style.width = '300px'
    taskName.style.paddingLeft = '10px'
    taskName.style.borderRadius = '4px';

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('btn', 'btn-primary');
    editTaskBtn.textContent = 'Modifier';
    editTaskBtn.addEventListener('click', function() {
        if(taskName.disabled) {
            editTask(editTaskBtn, taskName)
        } else {
            saveTaskName(task, editTaskBtn, taskName)
        }
       
    });

    actions.append(editTaskBtn);

    if (!task.completed) {
        const completeTaskBtn = document.createElement('button');
        completeTaskBtn.classList.add('btn', 'btn-success');
        completeTaskBtn.textContent = 'Terminé';
        completeTaskBtn.addEventListener('click', function() {
            completeTask(task, taskWrapper)
        });
        actions.append(completeTaskBtn);
    }

    if (task.completed) {
        const incompleteTaskBtn = document.createElement('button');
        incompleteTaskBtn.classList.add('btn', 'btn-warning');
        incompleteTaskBtn.textContent = 'En cours';
        incompleteTaskBtn.addEventListener('click', function() {
            incompleteTask(task, taskWrapper)
        });
        actions.append(incompleteTaskBtn);
    }



    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('btn', 'btn-danger');
    deleteTaskBtn.textContent = 'Supprimer';
    deleteTaskBtn.addEventListener('click', function() {
        deleteTask(task, taskWrapper)
    });
    actions.append(deleteTaskBtn);

    taskWrapper.append(taskName, actions);
    (task.completed ? completedTaskListContainer : incompleteTaskListContainer).append(taskWrapper);
}

function completeTask(task, taskWrapper) {
    task.completed = true;
    saveTasks();
    taskWrapper.remove();
    addTask(task);
}

function incompleteTask(task, taskWrapper) {
    task.completed = false;
    saveTasks();
    taskWrapper.remove();
    addTask(task);
}

function editTask(editTaskBtn, taskName) {
    editTaskBtn.textContent = 'Valider'
    taskName.style.border = '1px solid #000'
    taskName.disabled = false  
}

function saveTaskName(task, editTaskBtn, taskName) {
    errorMessage.textContent = ''
    if (tasks.some(task => task.name === taskName.value)) {
        errorMessage.textContent = 'Une tâche avec ce nom existe déjà';
        return;
    }

    editTaskBtn.textContent = 'Modifier'
    taskName.style.border = 'transparent'
    taskName.disabled = true  
    task.name = taskName.value
    saveTasks()
}

function deleteTask(task, taskWrapper) {
    const index = tasks.findIndex(item => item.name === task.name);
    tasks.splice(index, 1);
    saveTasks();
    taskWrapper.remove();
}

initTasks();
