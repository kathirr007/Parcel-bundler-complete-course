import $ from 'jquery'
import { onLoadEventHandler, newTodoEventHandler } from './event-handlers'

// import '../css/main.css'
// import '../less/main.less'
import '../scss/main.scss'

// console.log(intialTodos)


// window.addEventListener('load', onLoadEventHandler)
$(window).on('load', onLoadEventHandler)
$('.new-todo').on('change', newTodoEventHandler)