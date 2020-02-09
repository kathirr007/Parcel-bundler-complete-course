import intialTodos from '../initial-todos.json'

let data = intialTodos

export function getAllTodos() {
    return data;
}

export function addTodo(todo) {
    return data.push(todo);
}

export function removeTodo(id) {
    data = data.filter((item) => {
        return item.id !== id
    })
}

export function udpateTodo(id, completed) {
    const itemIndex = data.findIndex((value) => {
        return value.id === id
    })
    data[itemIndex].completed = completed
}