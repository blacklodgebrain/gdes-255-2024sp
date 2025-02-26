document.addEventListener('DOMContentLoaded',function () {
    console.log("I am here!")

    document.getElementById('add-task').addEventListener('click', function(event){
        event.preventDefault();
        console.log (event);
        var taskValue = document.getElementById('new-task').value;

        console.log("TASK VAlUE", taskValue);

        if (taskValue) {
            addTask(taskValue)
        }

    });

    var taskNumber = 0;

    function addTask(taskValue) {
        var li = document.createElement('li');
        li.setAttribute("id", `task-${taskNumber}`);

        //Create span for task test value
        var taskSpan = document.createElement('div');
        taskSpan.textContent = taskValue;
        taskSpan.setAttribute("id",`task-label-${taskNumber}`);
        taskSpan.classList.add("task-label");
        li.appendChild(taskSpan);

            //wrapping action buttons
        var actions = document.createElement('div');
        actions.classList.add("task-actions");

        createDeleteButton(li, actions);


        createEditButton(li, actions, taskValue);

        li.appendChild(actions);

        //Complete task
        li.addEventListener('click', function () {
            completeTask(li);
        });
    
        //Add new task
        document.getElementById('task-list').appendChild(li);

        taskNumber = taskNumber + 1;
    }


    //Create delete button
    function createDeleteButton(li, actions) {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete"
        deleteButton.type = "button";
        deleteButton.onclick = function(event) {
            li.parentNode.removeChild(li);
        }
        actions.replaceChildren(deleteButton);
    }


    //Create edit button
    function createEditButton(li, actions, taskValue) {
        var editButton = document.createElement('button');
        editButton.textContent = "Edit"
        editButton.type = "button";
        editButton.onclick = function(event) {
            editTask(li, taskValue);
        }
        actions.appendChild(editButton);
    }

    function completeTask(li) {
        li.classList.toggle('completed');
    }

    function saveTask(li, newTaskValue) {
        console.log("I AM SAVING");
        var label = li.querySelector('.task-label');

        label.textContent = newTaskValue;

        var actions = li.querySelector(".task-actions")


        
        createDeleteButton(li, actions);

        createEditButton(li, actions, newTaskValue);

        li.appendChild(actions);
    }

    function editTask(li, taskValue, taskNumber) {
        var label = li.querySelector(".task-label");
        var actions =  li.querySelector(".task-actions")
        var editInput = document.createElement('input');
        editInput.type = "text";
        editInput.value = taskValue;
        label.replaceChildren(editInput);
    

        //Create cancelButton button
        var cancelButton = document.createElement('button');
        cancelButton.textContent = "Cancel"
        cancelButton.type = "button";
        cancelButton.onclick = function(event) {
            cancelTask(li, taskValue)
        }
        actions.replaceChildren(cancelButton);

        //Create saveButton button
        var saveButton = document.createElement('button');
        saveButton.textContent = "Save"
        saveButton.type = "button";
        saveButton.onclick = function(event) {
            var newTaskValue = editInput.value;
            saveTask(li, newTaskValue);
        };
        actions.appendChild(saveButton);
    }  
    
    
    function cancelTask(li, taskValue) {
        var label = li.querySelector(".task-label")

        label.textContent = taskValue

        var actions = li.querySelector(".task-actions")

 
        createDeleteButton(li, actions);

        createEditButton(li, actions, taskValue);

        li.appendChild(actions);

    }
    

});




