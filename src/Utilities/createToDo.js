import { v4 as uuidv4 } from 'uuid';

export const createToDo = () => {
    let toDoTitle = document.querySelector('#taskName').value;
    let toDoProject = document.querySelector('#project').value;
    let toDoDescription = document.querySelector('#toDoDescription').value;
    let toDoDateDue = document.querySelector('#dueDate').value;
    return {project: toDoProject, toDoTitle: toDoTitle, description: toDoDescription, dueDate: toDoDateDue, id:'t' + uuidv4()};
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