import { renderTodos, clearNewTodoInput, getTodoId   } from './ui'
import { getAllTodos, addTodo, removeTodo, udpateTodo } from './data'

function trim(value) {
    return value.trim()
}

function capitalize(value) {
    // return value[0].toUpperCase() + value.substr(1)
    
    return value
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            // console.log("First capital letter: "+word[0]);
            // console.log("remain letters: "+ word.substr(1));
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

export function onLoadEventHandler() {
    renderTodos(getAllTodos())
}

export function newTodoEventHandler(e) {
    let title = e.target.value;
    // title = capitalize(trim(title))
    title = title |> trim |> capitalize;
    addTodo({
        id: Date.now(),
        title: title,
        completed: false
    })
    renderTodos(getAllTodos())
    clearNewTodoInput()
}

export function removeTodoEventHandler(e) {
    const id = getTodoId(e.target)
    removeTodo(id)
    renderTodos(getAllTodos())
}

export function toggleTodoEventListener(e) {
    const id = getTodoId(e.target)
    const isCompleted = e.target.checked
    udpateTodo(id, isCompleted)
    renderTodos(getAllTodos())
}