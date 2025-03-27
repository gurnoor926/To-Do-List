let task = document.getElementById("task");
let btn = document.getElementById("add");
let list = document.getElementById("task_list");

function add_task() {
    let task_name = task.value.trim();
    if (task_name === "") return; // Prevent adding empty tasks

    // Create a new task item
    let new_task = document.createElement("li");
    new_task.innerText = task_name;
    new_task.classList.add("list_task")

    // Create a delete button
    let del = document.createElement("button");
    del.innerText = "X";
    del.classList.add("delete-btn");
    // Add event listener to remove the task when delete button is clicked
    del.onclick = function() {
        list.removeChild(new_task);
    };

    // Append button inside the task item
    new_task.appendChild(del);

    // Append the task to the list
    list.appendChild(new_task);

    // Clear the input field
    task.value = "";
}

// Assign the add_task function to the button click
btn.onclick = add_task;
