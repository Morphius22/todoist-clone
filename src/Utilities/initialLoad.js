import {clearContent} from './clearContent';
import {displayForm} from './toDoForm';
import {hideForm} from './toDoForm';
import { createToDo, displayToDos } from './createToDo';
import { addTaskToProject } from './createToDo';
import {projects} from '../index';
import {appendToDo} from './appendToDo'
import { fr } from 'date-fns/locale';

export function createElement (elementToAdd, parentIdentifier, domClass, id, content) {
    let parent = document.querySelector(parentIdentifier);
    let element = document.createElement(elementToAdd);
    element.classList.add(domClass);
    element.setAttribute('id', id);
    element.textContent = content;
    parent.appendChild(element);
}



export function loadContent () {
    createElement('section', '.content', 'contentSection1', '');
    createElement('h2', '.contentSection1', 'viewToday', '', 'Today')
    createElement('h3', '.contentSection1', 'viewToday', '', 'Sun March 3rd')

    createElement('section', '.content', 'contentSection2', '');
    const noTaskImage = document.createElement('img');
    noTaskImage.src = "/assets/watercolor.png";
    const parent = document.querySelector('.contentSection2');
    parent.appendChild(noTaskImage);

    createElement('section', '.content', 'contentSection3', '');
    createElement('h4', '.contentSection3', 'viewToday', '', 'Get a clear view of the day ahead')
    createElement('p', '.contentSection3', 'viewToday', '', 'All your tasks that are due today will show up here.')
    
    createElement('section', '.content', 'toDoSection', '');

    createElement('button', '.content', 'addTaskButton', '', 'Add Task')
    let addTaskButton = document.querySelector('.addTaskButton');
    addTaskButton.addEventListener('click', e => {
        clearContent();
        displayForm();
        addTaskButton.remove();
        // addTaskButton.style.display = 'none';
    });

    let createTaskButton = document.querySelector('.createToDoButton');
    createTaskButton.addEventListener('click', e => {
        e.preventDefault();
        hideForm();
        clearContent();
        let newToDo = createToDo();
        addTaskToProject(projects,newToDo);
        displayToDos();
        console.log(projects);
    })
}


export function createAddTaskButton () {
    createElement('button', '.content', 'addTaskButton', '', 'Add Task')
    let addTaskButton = document.querySelector('.addTaskButton');
    addTaskButton.addEventListener('click', e => {
        clearContent();
        displayForm();
        addTaskButton.remove();
    });
}
