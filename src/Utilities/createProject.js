import { createElement } from './initialLoad'
import { v4 as uuidv4 } from 'uuid';

//creates a new project object & appends values to sidebar of UI
export const createProject = (projectTitle) => {
    let projectForm = document.querySelector('#project')
    let option = document.createElement("option");
    option.value = projectTitle;
    option.text = projectTitle;
    projectForm.appendChild(option);
    return {title: projectTitle, id:'p' + uuidv4(), status: 'inactive', todos: []};
}


export function updateSideBar (projectObject) {
    let newSidebarDiv = document.createElement('div');
    let sideBarButton = document.querySelector('.createProjectButton');
    newSidebarDiv.classList.add('menuItem');
    newSidebarDiv.setAttribute('id', projectObject.title);
    sideBarButton.parentNode.insertBefore(newSidebarDiv,sideBarButton);

    let bulletIcon = document.createElement('img');
    bulletIcon.src  = '/src/assets/fiber_manual_record_black_18dp.svg';
    newSidebarDiv.appendChild(bulletIcon);


    let projectHeader = document.createElement('p');
    projectHeader.textContent = projectObject.title;
    newSidebarDiv.appendChild(projectHeader);

}