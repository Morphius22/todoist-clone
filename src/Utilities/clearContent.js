export function clearContent () {
    let contentSection1 = document.querySelectorAll('.contentSection1');
    contentSection1.forEach(item => item.remove());
    
    let contentSection2 = document.querySelectorAll('.contentSection2');
    contentSection2.forEach(item => item.remove());

    let contentSection3 = document.querySelectorAll('.contentSection3');
    contentSection3.forEach(item => item.remove());

    let todoList = document.querySelector('.toDoSection');
    todoList.textContent = '';
}