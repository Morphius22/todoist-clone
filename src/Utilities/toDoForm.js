export { displayForm, hideForm }

function displayForm() {
    document.querySelector('.todoForm').style.display = 'grid';
}

function hideForm() {
    document.querySelector('.todoForm').style.display = 'none';
}
