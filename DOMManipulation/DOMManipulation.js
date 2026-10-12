const submitForm = document.querySelector('.form-group');
const titleInput = document.querySelector('#input-title');
const toDoList = document.querySelector('#list-output');

const checkItem = document.querySelectorAll('.check-action');
const deleteItem = document.querySelectorAll('.delete-action');

function createListItem(title) {
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
    return listItem;
};

function shake(element) {
    element.classList.add('invalid-shake');
    element.addEventListener('animationend', () => {
        element.classList.remove('invalid-shake');
    }, { once: true });
}

submitForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!titleInput.value.trim()) {
        shake(titleInput);
        return;
    }
     
    toDoList.appendChild(
        createListItem(titleInput.value)
    );
    titleInput.value = '';
    titleInput.focus();
});

toDoList.addEventListener('click', function(e) {
    const deleteButton = e.target.closest('.btn-delete');
    if (deleteButton) {
        deleteButton.closest('li').remove();
    }
});

toDoList.addEventListener('change', function(e) {
    const checkInput = e.target.closest('.input-check');
    if (!checkInput) return;
    
    checkInput.closest('li').classList.toggle('done', checkInput.checked);
});