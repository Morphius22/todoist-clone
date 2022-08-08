import { v4 as uuidv4 } from 'uuid';
import {projects} from '../index';
import { appendToDo } from './appendToDo';
import { clearContent } from './clearContent';

export const createToDo = () => {
    let toDoTitle = document.querySelector('#taskName').value;
    let toDoProject = document.querySelector('#project').value;
    let projectIdNew = findProjectId(projects, toDoProject);
    console.log('supposed to be project id:');
    console.log(projectIdNew);
    let toDoDescription = document.querySelector('#toDoDescription').value;
    let toDoDateDue = document.querySelector('#dueDate').value;
    let toDoForm = document.querySelector('.todoForm');
    toDoForm.reset();

    //Make todos display active project or all todos if no active project
    // clearContent();
    // const target = projects.filter(project => project.status === 'active');
    // console.log ('this is the target:');
    // console.log (target);
    // console.log (target.length);
    // console.log (target[0].todos);
    // appendToDo(target.todos);
    // if (target.length = 0) {
    //     projects.forEach(project => appendToDo(project.todos));
    //     console.log ('all to dos should be displayed');
    // } else {
    //     console.log(target[0].todos)
    //     appendToDo(target[0].todos);
    //     console.log ('only the active projects todos should be visible');
    // }

    return {project: toDoProject, toDoTitle: toDoTitle, description: toDoDescription, dueDate: toDoDateDue, id:'t' + uuidv4()};
}

export function displayToDos () {
        clearContent();
        const target = projects.filter(project => project.status === 'active');
        console.log ('this is the target:');
        console.log (target);
        console.log (target.length);
        if (target.length != 0) {
            appendToDo(target[0].todos);
        } else {
            projects.forEach(project => appendToDo(project.todos));
            console.log (target[0].todos);
        }
        
}

export function addTaskToProject(projectObject, newTask) {
    projectObject.forEach(project => {
        if (project.title == newTask.project) {
            project.todos.push(newTask);
            console.log(project);
            console.log(project.todos);
        }
    });
}

function findProjectId (projectsArray, projectName) {
    projectsArray.forEach(project => {
        if (projectName == project.title) {
            return project.id
        };
    });
}