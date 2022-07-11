export { displayForm, hideForm }
import { clearContent } from './clearContent';
import { createToDo } from './createToDo';
import { addTaskToProject } from './createToDo';
import {projects} from '../index';
import { createAddTaskButton } from './initialLoad';

function displayForm() {
    document.querySelector('.todoForm').style.display = 'grid';
    // let toDoButton = document.querySelector('.createToDoButton');
    // toDoButton.addEventListener('click', e => {
    //     e.preventDefault();
    //     hideForm();
    //     clearContent();
    //     let newToDo = createToDo();
    //     addTaskToProject(projects,newToDo);
    //     console.log(projects);
    // });
}

function hideForm() {
    document.querySelector('.todoForm').style.display = 'none';
    createAddTaskButton();
}
