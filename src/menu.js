// create a div
// add content
// add styles
// append to the dom

function createMenu(mainDocument) {
    let content = document.createElement("div");
    content.id = "menu item-info";
    content.classList = "tab-content";

    let heading = document.createElement("h2");
    heading.innerHTML = "Our menu";
    content.appendChild(heading);
    // attempt to loop thru an array to add multiple info at once

    let food = ["Spaghetti", "Chicken Parm", "Baked Eggplant", "Stromboli"];

    let desc = ["Fresh, homemade pasta with a generous side of tomato sauce.",
        "Delicious chicken breast that is breaded and shallow fried on top of a mountain of pasta and a small dose of sauce",
        "Breaded eggplant with a generous amount of tomato sauce, baked as requested in our oven",
        "Pepperoni, cheese and sauce goodness stuffed inside some lovely pizza dough"
    ];

    for (let i = 0; i < food.length; i++) {
        let category = document.createElement("h3");
        category.innerHTML = food[i];
        content.appendChild(category);
        for (let j = 0; j = food[j]; j++) {
            let categoryInfo = document.createElement("p");
            categoryInfo.innerHTML = desc[i];
            content.appendChild(categoryInfo);
        }
    }




    mainDocument.appendChild(content);
}

export {
    createMenu
};