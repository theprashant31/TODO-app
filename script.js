const input = document.querySelector('.input-area input');
const addButton = document.querySelector('.add-task'); 
const taskList = document.querySelector('.list'); 


const inputHandler = () => {
    const newTask = input.value.trim(); 
    if (newTask.length === 0) return; 

    const taskElement = createTask(newTask); 
    taskList.appendChild(taskElement);
    input.value = '';
};


function createTask(newTask) {
    const div = document.createElement('div'); 
    const li = document.createElement('li'); 
    const button = document.createElement('button'); 

    li.textContent = newTask; 
    button.textContent = 'Delete'; 

    div.appendChild(li); 
    div.appendChild(button); 
    button.addEventListener('click', () => {
        div.remove(); 
    });

    return div; 
}
addButton.addEventListener('click', inputHandler);
