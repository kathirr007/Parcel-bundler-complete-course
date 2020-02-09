import $ from 'jquery'
import { onLoadEventHandler, newTodoEventHandler, removeTodoEventHandler, toggleTodoEventListener } from './event-handlers'

import '@fortawesome/fontawesome-free/css/all.css'
// import '../css/main.css'
// import '../less/main.less'
import '../scss/main.scss'

// console.log(intialTodos)


// window.addEventListener('load', onLoadEventHandler)
$(window).on('load', onLoadEventHandler)
$('.new-todo').on('change', newTodoEventHandler)
$(document).on('click', '.delete-icon', removeTodoEventHandler)
$(document).on('click', '.todo-check', toggleTodoEventListener)