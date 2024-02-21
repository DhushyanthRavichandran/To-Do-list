var input = document.getElementById("input")
var elements = document.getElementById("elements");


function add() {

    if (input.value.trim() !== "") {

        var list = document.createElement("li");


        var textspace = document.createElement("input");
        textspace.value = input.value;
        textspace.className = "textspace";
        textspace.setAttribute("readonly", true);
        list.appendChild(textspace);


        var doneButton = document.createElement("button")
        doneButton.textContent = "Done";
        doneButton.className = "donebutton";
        doneButton.onclick = function (event) {
            done(event);
        }
        list.appendChild(doneButton);



        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delebutton";
        deleteButton.onclick = function (event) {
            dele(event);
        };
        list.appendChild(deleteButton);


        elements.append(list)
        input.value = "";
    }
    else {
        alert("Please enter a valid input!")
    }
}
function dele(event) {
    event.target.parentElement.remove()
}
function done(event) {
    var listItem = event.target.parentElement;
    var text = listItem.querySelector("input");
    text.style.textDecoration = "line-through";
}
