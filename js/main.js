const tasks = [];

const addTaskToList = (event) => {
    if (event.target.value === '') {
        return;
    }

    // OPCION 1
    // if (event.key === 'Enter') {
    //     tasks.push(event.target.value);
    //     const tasksList = document.getElementById('tasks-list');
    //     tasksList.innerHTML += `<li>` + event.target.value + `<button onclick="deleteTask(event)">Eliminar</button></li>`+`</li>`;
    //     event.target.value = '';
    // };

    // OPCION 2
    if (event.key === 'Enter') {
        const tasksList = document.getElementById('tasks-list');
        const newLi = document.createElement("li");
        newLi.innerHTML += event.target.value + `<button style="margin-left: 10px" onclick="deleteTask(event)"> Eliminar</button></li>`;
        tasksList.appendChild(newLi);
        event.target.value = '';
    }
}

const deleteTask = (event) => {
    const taskToDelete = event.target.parentNode;
    taskToDelete.remove();
}





