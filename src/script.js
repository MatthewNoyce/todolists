const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText !== ''){
        const li = document.createElement('li');
        li.addEventListener('click', completeTask);
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent='delete';
        deleteBtn.addEventListener('click', deleteTask);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
        
    }
}

function completeTask(event){
    const task = event.target;
    task.classList.toggle('completed');

}
function deleteTask(event){
    const task = event.target.parentElement;
    taskList.removeChild(task);
}