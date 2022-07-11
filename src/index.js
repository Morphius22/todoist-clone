import { loadContent } from './Utilities/initialLoad';
import { createProject, updateSideBar } from './Utilities/createProject';
import { clearContent } from './Utilities/clearContent';
import './styles.css';
import { loadProjectForm } from './Utilities/createProjectForm';
import { menuListeners } from './Utilities/appendToDo';
export {projects};
import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4()); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

//loads the initial screen when someone visits site
loadContent();

//initial array where all projects & to-do's get added when made
let projects = [];

//creates a project titled welcome
const welcomeProject = createProject('Welcome');

//Pushes new welcome project into array so there is a default project
projects.push(welcomeProject);
console.log(welcomeProject);
console.log(projects);

//adds welcome project to side bar
updateSideBar(welcomeProject);

//allow projects to be clicked and display tasks
menuListeners(projects);

//grabs the project form submit button
let projectButton = document.querySelector('.createProjectButton');

//when a project is created, removes form, adds new project to project array, and updates sidebar
projectButton.addEventListener('click', e => {
    //removes existing dom content and makes project form appear
    clearContent();
    loadProjectForm();

    //When submit button clicked, add new project to array & update sidebar
    let createProjectButton = document.querySelector('.createProjectFormButton');
    createProjectButton.addEventListener('click', e => {
        e.preventDefault();

        let projectObject = createProject(document.querySelector('#projectTitleField').value);
        console.log(projectObject);
        projects.push(projectObject);
        console.log(projects);

        updateSideBar(projectObject);

        let projectForm = document.querySelector('.projectForm');
        projectForm.remove();

        menuListeners(projects);
    })
})
