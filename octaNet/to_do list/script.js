function addTodo() {
    var input = document.getElementById("todo-input");
    var text = input.value.trim();
    if (text === "") return;

    var category = document.getElementById("types").value;
    var dueDate = document.getElementById("due-date").value;

    var ul = document.getElementById("todo-items");
    var li = document.createElement("li");
    li.textContent =   category  +" " +  text  + "(Due: "+ dueDate +")";

    var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            ul.removeChild(li);
        };

     li.appendChild(deleteBtn);
     ul.appendChild(li);
     
     input.value = "";
     document.getElementById("due-date").value = "";
    }