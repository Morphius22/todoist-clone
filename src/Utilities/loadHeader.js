function createElement (elementToAdd, parentIdentifier, id, content) {
    let parent = document.querySelector(parentIdentifier);
    let element = document.createElement(elementToAdd);
    element.setAttribute('id', id)
    element.textContent = content
    parent.appendChild(element);
}


export function loadHeader () {
    let parent = document.querySelector(".container");
    let child = document.createElement("div");
    document.body.appendChild(child);
}