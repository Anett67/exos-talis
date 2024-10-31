const completedTaskListContainer = document.getElementById('completed-tasks')
const incompleteTaskListContainer = document.getElementById('incomplete-tasks')
const taskInput = document.getElementById('task-input')
const categoryInput = document.getElementById('category-input')
const taskCreateBtn = document.getElementById('list-create-btn')
const errorMessage = document.getElementById('error-message')

// Je créé un constructeur pour l'objet Task
class Task {
    constructor(name, category = null, completed = false, ) {
        this.name = name;
        this.completed = completed;
        this.category = category
    }
}

// Je définie mes catégories que je veux afficher dans mes options
const categories = [
    { text: 'Routine du matin', color: '#FFBF46' },
    { text: 'Routine du soir', color: '#8ACB88' },
    { text: 'Ménage', color: '#53A2BE' },
    { text: 'Bien-être', color: '#F78764' },
]

// Je fais une boucle sur la liste des catégories pour ajouter les options à mon champ select
function initCategories(categories) {
    categories.forEach(item => {
        const option = document.createElement('option')
        option.value = item.text
        option.textContent = item.text
        categoryInput.append(option)
    })
}

// J'initialise mon tableau tasks, je récupère les tâches enregistré si elles existent
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// J'écoute le clique sur mon bouton de création
taskCreateBtn.addEventListener('click', () => {
    // Je vide le message d'erreur
    errorMessage.textContent = '';
    if (!taskInput.value) return;

    // J'affiche un message d'erreur si la tâche existe 
    if (tasks.some(task => task.name === taskInput.value)) {
        errorMessage.textContent = 'Une tâche avec ce nom existe déjà';
        return;
    }

    // Je cherche l'objet catégorie qui a le même nom que la valeur sélectionné
    const category = categories.find(category => category.text === categoryInput.value) ?? null

    // Je créé la nouvelle tâche
    const task = new Task(taskInput.value, category);

    // J'ajoute la tâche à mon tableau JS
    tasks.push(task);
    // Je mets également à jour le tableau dans le localStorage
    saveTasks();

    // Je vide le champ input
    taskInput.value = '';

    // J'appelle la fonction qui créé mon élément HTML
    addTask(task);
});

// La fonction qui met à jour le localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// On l'appelle au chargement de la page
function initTasks() {
    tasks.forEach(addTask);
}

function addTask(task) {
    // Je crée l'élément avec le nom (input disabled)
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');

    const nameWrapper = document.createElement('div')

    const taskName = document.createElement('input');
    taskName.value = task.name;
    taskName.disabled = true
    taskName.style.border = 'none'
    taskName.classList.add('task-name')
    nameWrapper.append(taskName)


    // Si la tâche a une catégorie je l'ajoute
    if(task.category) {
        const category = document.createElement('span')
        category.textContent = task.category.text ?? '' 
        category.classList.add('category-badge')
        category.style.backgroundColor = task.category.color
        nameWrapper.append(category)
    }

    const actions = document.createElement('div');
    actions.classList.add('actions');

    // Je crée le bouton de modification
    const editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('btn', 'btn-primary');
    editTaskBtn.textContent = 'Modifier';
    // Je vérifie si l'input est disabled pour appeler la bonne fonction
    editTaskBtn.addEventListener('click', function() {
        if(taskName.disabled) {
            editTask(editTaskBtn, taskName)
        } else {
            saveTaskName(task, editTaskBtn, taskName)
        }
       
    });

    // J'ajoute le bouton à mon document HTML
    actions.append(editTaskBtn);

    // Si la tâche est en cours j'ajoute un bouton pour compléter, sinon un bouton pour le marquer comme 'En cours'
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

    // J'ajoute un bouton pour la supression
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('btn', 'btn-danger');
    deleteTaskBtn.textContent = 'Supprimer';
    deleteTaskBtn.addEventListener('click', function() {
        deleteTask(task, taskWrapper)
    });
    actions.append(deleteTaskBtn);

    // J'ajoute l'élément avec le nom et la catégorie et les boutons à l'élément parent
    taskWrapper.append(nameWrapper, actions);

    // J'ajoute l'élément qui contient maintenant nom, catégorie et bouton à la liste
    (task.completed ? completedTaskListContainer : incompleteTaskListContainer).append(taskWrapper);
}

// Compléter une tâche
function completeTask(task, taskWrapper) {
    task.completed = true;
    saveTasks();
    taskWrapper.remove();
    addTask(task);
}

// Marquer une tâche comme En cours
function incompleteTask(task, taskWrapper) {
    task.completed = false;
    saveTasks();
    taskWrapper.remove();
    addTask(task);
}

// Modifier une tâche
function editTask(editTaskBtn, taskName) {
    editTaskBtn.textContent = 'Valider'
    taskName.style.border = '1px solid #000'
    taskName.disabled = false  
}

// Enregistrer le nom modifié
function saveTaskName(task, editTaskBtn, taskName) {
    errorMessage.textContent = ''
    if (tasks.some(item => item.name === taskName.value && item.name !== task.name)) {
        errorMessage.textContent = 'Une tâche avec ce nom existe déjà';
        return;
    }

    editTaskBtn.textContent = 'Modifier'
    taskName.style.border = 'transparent'
    taskName.disabled = true  
    task.name = taskName.value
    saveTasks()
}

// Supprime une tâche du document HTML, du tableau et du localStorage
function deleteTask(task, taskWrapper) {
    const index = tasks.findIndex(item => item.name === task.name);
    tasks.splice(index, 1);
    saveTasks();
    taskWrapper.remove();
}


initCategories(categories);
initTasks();
