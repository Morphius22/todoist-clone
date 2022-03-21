import { loadContent } from './Utilities/initialLoad';
import { createProject } from './Utilities/createProject';
import { createToDo } from './Utilities/createToDo';
import { clearContent } from './Utilities/clearContent';
import { displayForm, hideForm } from './Utilities/toDoForm';
import './styles.css';

loadContent();

const welcomeProject = createProject('Welcome','Your first project','today');
console.log(welcomeProject);

const welcomeToDO = createToDo('Welcome', 'try making a new todo', 'today', 'welcome', 'tomorrow');
console.log(welcomeToDO);

let addTaskButton = document.querySelector('.addTaskButton');
addTaskButton.addEventListener('click', e => {
    clearContent();
    displayForm();
});