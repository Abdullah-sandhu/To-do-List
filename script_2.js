function addtask() {
    const taskInput = document.getElementById('addtask').value;
    if (taskInput.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    const newtask = document.createElement('li');
    newtask.textContent = taskInput;
    const deletbtn = document.createElement('button');
    deletbtn.textContent = "Delete";
    deletbtn.onclick = function() {
        newtask.remove();  
    };
    newtask.appendChild(deletbtn);
    const tasklist = document.getElementById('tasklist');
    tasklist.appendChild(newtask);
    document.getElementById('addtask').value = "";
}
