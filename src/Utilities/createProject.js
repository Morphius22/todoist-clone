import { createElement } from './initialLoad'

export const createProject = (projectTitle) => {
    let projectForm = document.querySelector('#project')
    let option = document.createElement("option");
    option.value = projectTitle;
    option.text = projectTitle;
    projectForm.appendChild(option);
    return {title: projectTitle, todos: []};
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