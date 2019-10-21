var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var delbuttons = document.getElementsByClassName("delete");


function inputLength() {
	return input.value.length;
}

function liClick() {
    this.classList.toggle("done");
}

window.addEventListener("load", function () {
    for (i = 0; i < delbuttons.length; i++) {
        delbuttons[i].addEventListener("click", function (e) {
            e.target.parentNode.remove();
        });
    }

    for (i = 0; i < list.length; i++) {
        list[i].addEventListener("click", liClick);
    }
});

function createListElement() {
    // create list item with id
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.setAttribute("id", ul.childElementCount + 1)
    li.addEventListener("click", liClick);

    //create delete button and add listener for delete on click
    var delbutton = document.createElement("button");
    delbutton.setAttribute("class", "delete");
    delbutton.appendChild(document.createTextNode("Delete"));
    delbutton.addEventListener("click", function (e) {
        e.target.parentNode.remove();
    });     

    // append delete button to list item
    li.appendChild(delbutton);

    // append list item to ul
    ul.appendChild(li);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);