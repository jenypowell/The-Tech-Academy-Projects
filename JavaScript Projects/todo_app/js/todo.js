/*this function gets the task from input*/
function get_todos() {
    /*This creates an array of tasks that are input*/
    var todos = new Array;
    /*this pulls the task that was saved in the web browswer memory*/
    var todos_str = localStorage.getItem('todo');
    /*if the input is not null then JSON.parse will communicate with the web browswer to make the task a JavaScript object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*this function adds the input task to the get_todos function array*/
function add() {
    /*this takes the input task and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*this adds a new task to the end of the array*/
    todos.push(task);
    /*this converts the task input to a JSON String */
    localStorage.setItem('todo',JSON.stringify(todos));
    document.getElementById("task").value="";
    show();
    return false;
}

/*this function keeps the tasks permanetly displated on the screen*/
function show() {
    /*this sets the task that was retrieveed as a variable*/
    var todos =get_todos();

    /*this sets up each task as an unordered list*/
    var html = '<ul>';

    /*this displays the task to the list in the order that it was input*/
    for (var i=0; i < todos.length; i++) {
        /*this also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class = "remove" id="' + i + '">x</button></li>';
    };
    html += '<ul>';
    /*this displays the task as a list*/
    document.getElementById('todos').innerHTML=html;
    /*this tells the browser how to display the todo array after an item has been removed */
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i< buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
/*this displays the input task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed permanately on the screen */
show();

/*this creates the functionality of removing a todo item from the array*/
function remove() {
    var id= this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*this loiks in the show() how to display a removed item on the screen*/
    show();
    return false;

}