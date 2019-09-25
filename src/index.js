import {
    addContent
} from './page_load';
import {
    createMenu
} from './menu.js';
import {
    createContact
} from './contact.js';

const pageContent = document.querySelector("#content");
const tabContent = document.createElement("div");


addContent();

// dynamic tab headers
let ul = document.createElement('ul');
let items = ["Menu", "Contact"];
items.forEach(e => {
    let li = document.createElement('li');
    li.classList.add("tab-item");
    li.classList.add(e);
    li.innerHTML = e;
    ul.appendChild(li);
    li.addEventListener("click", addToggle, false);
});

pageContent.appendChild(ul);

let li = document.querySelector("li");

function addToggle() {
    // if (this.classList.contains("hidden")) {
    //     // li.classList.remove("display");
    //    // li.classList.add("hidden");
    //     this.classList.add("display");
    //     li.classList.add("hidden");
    //     this.classList.remove("hidden");
    // }
    // if (this.classList.contains("display")) {
    //     li.classList.remove("hidden");
    //     this.classList.add("hidden");
    //     this.classList.remove("display");
    // }
    // else if (!this.classList.contains("display")) {
    //     // li.classList.remove("display");
    //     li.classList.remove("display");
    //     li.classList.add("hidden");
    //     this.classList.add("display");
    //     this.classList.remove("hidden");
    // }
    //createContact(pageContent);

    if (this.classList.contains("Menu")) {
        tabContent.innerHTML = "";
        createMenu(tabContent);
        // menu.classList.add("display");
        // menu.classList.remove("hidden");
        pageContent.appendChild(tabContent);

    }
    if (this.classList.contains("Contact")) {
        tabContent.innerHTML = "";
        createContact(tabContent);
        pageContent.appendChild(tabContent);

    }

}