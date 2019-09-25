function appendElements() {
    let element = document.createElement('div');
    element.innerHTML += "<div id='image-background'></div>";
    return element;
};

function addContent() {
    let element = appendElements();
    const pageContent = document.querySelector("#content");
    pageContent.appendChild(element);
};

export {
    addContent
};