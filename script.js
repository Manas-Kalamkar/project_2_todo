const input = document.getElementById('new-task-input');
const addBtn = document.getElementById('add-task-button');
const taskCon = document.getElementById('tasks-container');
const compCon = document.getElementById('completed-tasks-container');


//addtask function
function addTask(){
// store input in taskText var
    const taskText = input.value.trim();

    if(!taskText){
        alert('Todo is missing...');
        return

    }
//create a list element 
    const li= document.createElement('li');
    li.classList.add('task-item');

//create a checkbox input for knowing that todo is completed
    const check = document.createElement('input');
    check.classList.add('task-checkbox');
    check.type='checkbox';

//create a h2 element to display the task name    
    const description = document.createElement('h2');
    description.classList.add('task-description');
    description.textContent=taskText;

//create a delete button to delete the todo
    const delButton = document.createElement('button');
    delButton.classList.add('delete-task-button');
    delButton.textContent='Delete';

//assembling the list element
    li.appendChild(check);
    li.appendChild(description);
    li.appendChild(delButton);

//adding the todo in the task container  
 
    taskCon.appendChild(li);
//removing the input text from input element
    input.value='';

    updateVisulation();
}

//event listeners for adding task
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
addBtn.addEventListener('click', addTask);


//handles the Todos
const handle = (event, currentContainer, otherContainer) => {
    if(event.target.classList.contains('task-checkbox')){

        const checkbox = event.target;
        const taskItem = checkbox.closest('.task-item');
        
        if(checkbox.checked){
            taskItem.classList.add("completed");
            otherContainer.appendChild(taskItem);
            updateVisulation()
        }else{
            taskItem.classList.remove("completed");
            otherContainer.appendChild(taskItem);
            updateVisulation();
        }
    }else if(event.target.classList.contains('delete-task-button')){
        const taskItemToRemove = event.target.closest('.task-item');
        taskItemToRemove.remove();
        updateVisulation();
    }
}

//event listener for handling todo in task container
taskCon.addEventListener("click", (e)=>{
    handle(e,taskCon,compCon);
})

//event listener for handling todo in complete container
compCon.addEventListener("click", (e)=>{
    handle(e,compCon,taskCon);
})

//updating the class and visulation 
const updateVisulation = () =>{
    if(compCon.children.length>0){
        completedHeading.style.display="block";
        compCon.classList.remove('completed-task-container')

    }else{
        compCon.classList.add('completed-task-container')
        completedHeading.style.display="none";

    }
}


