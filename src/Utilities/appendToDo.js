import { clearContent } from './clearContent';
import { createElement } from './initialLoad';
import {projects} from '../index';

//Why not just append the new one if it matches the projects. Or it opens the project.
export function appendToDo (todoArray) {
    let taskNumber = 0;
    // clearContent();
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


//change this so event listener is a function or multiple
//Displays to-do's for a specific project when that project is clicked in sidebar
export function menuListeners (projects) {
    let menuProjects = document.querySelectorAll('.menuItem');
    console.log('menu projects:' + menuProjects);
    menuProjects.forEach(item => {
        item.removeEventListener('click', appendToDo);
        item.addEventListener('click', e => {
            console.log('item content:')
            console.log(item.textContent)
            //good oppurtunity for a filter and target pass
            clearContent();
            projects.forEach(project => project.status = 'inactive');

            const target = projects.filter(project => project.title == item.textContent);
            target[0].status = 'active';

            appendToDo(target[0].todos);

            //left for shame :)
            // projects.forEach(project => {
            //     if (project.title == item.textContent) {
            //         appendToDo(project.todos);
            //         project.status = 'active';
            //     }
            // });
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
            console.log('This is the ID of the parent:', toDoId);
            toDoItem.remove();
            let toDoProject = button.id;

            //Find the target project
            const target = projects.filter(proj => proj.title === toDoProject);
            console.log('target:');
            console.log(target);

            //Disect out the to-do's array from the targeted project
            //potential improvement: find a way to not have to index since it returns an array
            const newArr = target[0].todos.filter(todo => todo.id !== toDoId);
            console.log('newarr:');
            console.log(newArr);

            //Update the original array with new one.
            target[0].todos = newArr;
            console.log(target[0]);
            console.log(projects);
            
            //keeping this here for shame
            //loop through each project
            // projects.forEach(project => {
            //     //if the project title is equal to the Id of the complete task button, continue:
            //     if (project.title == toDoProject) {
            //         console.log(`this is the project where something should get deleted:`, project);
            //         console.log(`this is the todo array of the project`, project.todos);
            //         //create a new array where we filter the current project values to where the id of the toDo and the ID of the parent element match
            //         let updatedProject = project.todos.filter(todo => {
            //             console.log(todo.id);
            //             console.log(toDoId);
            //             return todo.id != toDoId;
            //         });
            //         console.log('this is supposed to be the updated project', updatedProject);
            //         //make array equal to old one
            //         project = updatedProject;
            //         console.log(`This is the new projects array:`, projects);
            //     }
            // });
        });
    })
};