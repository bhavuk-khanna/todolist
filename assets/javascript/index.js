var form1 = document.getElementById('add-task');
var submitButton1 = document.getElementById('add-task-submit');
var addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', addTask);

function addTask(e) {
    submitButton1.click();
}



var form2 = document.getElementById('delete-task');
var submitButton2 = document.getElementById('delete-task-submit');
var deleteTaskBtn = document.getElementById('delete-task-btn');

deleteTaskBtn.addEventListener('click', deleteTask);

function deleteTask(e) {
    submitButton2.click();
}