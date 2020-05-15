// function addTodoTask() {
//   var todoItem = $("#new-todo-item").val();
//   $("#todo-list").append(
//     "<li><input type='checkbox'" +
//       " name='todo-item-done'" +
//       " class='todo-item-done'" +
//       " value='" +
//       todoItem +
//       "' /> " +
//       todoItem +
//       " <button class='todo-item-delete'>" +
//       "Delete</button></li>"

//   );

//   $("#new-todo-item").val("");
// }

// function deleteTodoTask(e, item) { /* Delete function with a fade using jquery */
//   e.preventDefault();
//   $(item)
//     .parent()
//     .fadeOut("slow", function () {
//       $(item).parent().remove();
//     });
// }

// function completeTodoItem() { /* Completed function where the tasks who are finished is line-through */
//   $(this).parent().toggleClass("strike");
// }

// $(function () {
//   $("#add-todo-item").on("click", function (e) {
//     e.preventDefault();
//     addTodoTask();
//   });

//   $("#todo-list").on("click", ".todo-item-delete", function (e) {
//     var item = this;
//     deleteTodoTask(e, item);
//   });

//   $(document).on("click", ".todo-item-done", completeTodoItem);
// });


// localStorage.setItem('Tasks',)

function saveTask(e){

var taskName = document.getElementById("task-name").nodeValue;
var taskDescription = document.getElementById("task-description").nodeValue;

var tasks = {

  name : taskName,
  description:taskDescription
}

if(localStorage.getItem('tasks')==null){
var task = []; task.push(tasks);
localStorage.setItem('task', JSON.stringify(task));

}else{
  var myTask = localStorage.getItem('task', JSON.stringify(task)); myTask.push(task);
  localStorage.setItem('task', JSON.stringify(myTask));
}

}

function getTask(){
  var task = JSON.parse(localStorage.getItem('task'));

var taskResult = document.getElementById('taskResult');
taskResult.innerHTML = "";

for(var i = 0; i < task.length; i++){
  var name = task[i].name;
  var description = task[i].description;

  taskResult.innerHTML += '<div class="well><h3>'+ name +' '+description+' </h3>'
  '</div>'
}
}