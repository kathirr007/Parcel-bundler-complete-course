import intialTodos from '../initial-todos.json'

let data = intialTodos

export function getAllTodos() {
    return data;
}

export function addTodo(todo) {
    return data.push(todo);
}