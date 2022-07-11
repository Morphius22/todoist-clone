import { clearContent } from './clearContent';
import { createElement } from './initialLoad';
import {projects} from '../index';


export function appendToDo (todoArray) {
    let taskNumber = 0;
    clearContent();
    todoArray.forEach(object => {
        createElement('div','.toDoSection', 'toDoItem', object.id,'');
        createElement ('p', '#' + object.id,'toDoTitle', '', object.toDoTitle);
        createElement ('p', '#' + object.id,'toDoDescription', '', object.description);
        createElement ('p', '#' + object.id,'toDoDueDate', '', object.dueDate);
        createElement ('p', '#' + object.id,'toDoProject', '', object.project);
        createElement ('button', '#' + object.id,'taskDoneButton', object.project, 'Complete');
        taskNumber += 1;
        completeToDo();
    });
}

export function menuListeners (projects) {
    let menuProjects = document.querySelectorAll('.menuItem');
    console.log('menu projects:' + menuProjects);
    menuProjects.forEach(item => {
        item.removeEventListener('click', appendToDo);
        item.addEventListener('click', e => {
            console.log('item content:')
            console.log(item.textContent)
            projects.forEach(project => {
                if (project.title == item.textContent) {
                    appendToDo(project.todos);
                }
            });
        console.log('menu item ran');
        });
    });
}


export function completeToDo () {
    let completeToDoButtons = document.querySelectorAll('.taskDoneButton');
    completeToDoButtons.forEach(button => {
        // button.removeEventListener('click', removeToDo);
        button.addEventListener('click', e => {
            let toDoItem = button.parentElement;
            let toDoId = button.parentElement.id;
            console.log('This is the ID of the parent:');
            console.log(toDoId);
            toDoItem.remove();
            let toDoProject = button.id;
            projects.forEach(project => {
                if (project.title == toDoProject) {
                    project.todos.forEach(todo => {
                        if (todo.id == toDoId) {
                            todo.remove();
                        }
                    })
                }
            });
        });
    })
}

