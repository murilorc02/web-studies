const submitForm = document.querySelector('.form-group');
const titleInput = document.querySelector('#input-title');
const toDoList = document.querySelector('#list-output');

const checkItem = document.querySelectorAll('.check-action');
const deleteItem = document.querySelectorAll('.delete-action');

var tasks = [];
load();

function createListItem(title, checked) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-entry');

    listItem.innerHTML = `
        <p class="item-name"></p>
        <div class="action-group">
            <label class="actions check-action">
                <input type="checkbox" class="input-check"/>
                <span class="checkbox"></span>
            </label>
            <label class="actions delete-action"><button class="btn-delete">
                <i class="fa-regular fa-trash-can"></i>
            </button></label>
        </div>
    `

    listItem.querySelector('.item-name').textContent = title;
    listItem.querySelector('.input-check').checked = checked;
    checked && listItem.classList.toggle('done', checked);
    return listItem;
}

function shake(element) {
    element.classList.add('invalid-shake');
    element.addEventListener('animationend', () => {
        element.classList.remove('invalid-shake');
    }, { once: true });
}

function saveTaskToMemory(item) {
    let title = item.textContent.trim();
    let checked = item.querySelector('.input-check').checked;

    const indexToModify = tasks.findIndex(t => t.title == title);
    if (indexToModify !== -1) {
        tasks[indexToModify].checked = checked;
    } else {
        tasks.push({
            title: title,
            checked: checked
        });
    }

    localStorage.setItem('list', JSON.stringify(tasks));
    console.log(localStorage.getItem('list'));
}

function removeFromMemory(item) {
    const index = tasks.findIndex(t => t.title == item.textContent.trim());
    if (index === -1) return;

    tasks.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(tasks));
}

function load() {
    if (localStorage.getItem('list')) {
        tasks = JSON.parse(localStorage.getItem('list'));
        for (let task of tasks) {
            toDoList.appendChild(
                createListItem(task.title, task.checked)
            );
        }
    }
}

submitForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!titleInput.value.trim()) {
        shake(titleInput);
        return;
    }

    if (tasks.find(t => t.title == titleInput.value.trim())) {
        alert('This task already exists');
        titleInput.value = '';
        titleInput.focus();
        return;
    }

    let task = createListItem(titleInput.value, false);
    saveTaskToMemory(task);
    toDoList.appendChild(task);

    titleInput.value = '';
    titleInput.focus();
});

toDoList.addEventListener('click', function (e) {
    const deleteButton = e.target.closest('.btn-delete');
    if (deleteButton) {
        const item = deleteButton.closest('li');
        removeFromMemory(item);
        item.remove();
    }
});

toDoList.addEventListener('change', function (e) {
    const checkInput = e.target.closest('.input-check');
    if (!checkInput) return;

    const parent = checkInput.closest('li');
    parent.classList.toggle('done', checkInput.checked);
    saveTaskToMemory(parent);
});