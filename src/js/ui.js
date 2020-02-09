import deleteImage from '../images/delete.png'

export function renderTodos(todos) {
    const renderedItemArray = todos.map(function (todo) {
        const className = todo.completed ? 'completed' : ''
        const completionClass = todo.completed ? 'checked' : ''

        /* return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox"></span>
                <label>${todo.title}</label>
                <img src="${deleteImage}" class="delete-icon" width="30" height="30" />
            </li>
        `; */
        return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <i class="fas fa-check"></i>
                    <input class="todo-check" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.title}</label>
                <span class="delete-icon"></span>
            </li>
        `;
    })
    document.querySelector('.todo-list').innerHTML = renderedItemArray.join('');
}

export function clearNewTodoInput() {
    document.querySelector('.new-todo').value = ''
}

export function getTodoId(el) {
    return parseInt(
        el.dataset.id
        || el.parentNode.dataset.id
        || el.parentNode.parentNode.dataset.id, 10
    )
}