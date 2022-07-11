    
export function loadProjectForm () {   
    let parent = document.querySelector('.content');
    let form = document.createElement('form');
    form.classList.add('projectForm');
    parent.appendChild(form);

    let formTitle = document.createElement('legend');
    formTitle.textContent = "Add A Project";
    form.appendChild(formTitle);

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('form-field');
    titleDiv.setAttribute('id', 'titleDiv')
    form.appendChild(titleDiv);

    let projectTitleField = document.createElement('input');
    projectTitleField.placeholder = 'Project Title';
    projectTitleField.setAttribute('id', 'projectTitleField')
    titleDiv.appendChild(projectTitleField);

    let projectSubmitButton = document.createElement('button');
    projectSubmitButton.textContent = 'Create Project';
    projectSubmitButton.classList.add('createProjectFormButton')
    form.appendChild(projectSubmitButton);
} 
