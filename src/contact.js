function createContact(mainDocument) {
    let content = document.createElement("div");
    content.id = "contact item-info";
    content.classList = "tab-content";

    // phone number
    // email
    // location
    // google maps in the future?
    let contactHeader = ["Phone#:", "Email:", "Location:"];
    let contactInfo = ["479-123-4567", "restaurant@food.org", "123 Nevade Road, Nedvade, NE 78609"];

    for (let i = 0; i < contactHeader.length; i++) {
        let header = document.createElement("h3");
        header.innerHTML = contactHeader[i];
        content.appendChild(header);
        for (let j = 0; j = contactHeader[j]; j++) {
            let info = document.createElement("p");
            info.innerHTML = contactInfo[i];
            content.appendChild(info);
        }
    }
    // add this all to our content
    mainDocument.appendChild(content);
}

export {
    createContact
};