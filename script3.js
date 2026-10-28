//To-Do Liste

const todoInput = document.getElementById("todoInput");
const tasks = document.getElementById("tasks");
const form = document.getElementById("add-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (todoInput.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = todoInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✓";

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    tasks.appendChild(li);
    todoInput.value = "";
});

