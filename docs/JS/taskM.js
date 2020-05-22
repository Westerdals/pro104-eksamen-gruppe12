function changeTaskStatus(newStatus, taskId) {
    console.log("BYTTER STATUS");
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    const oldTask = taskList[taskId];
    const newTask = oldTask;
    newTask.status = newStatus;
    taskList[taskId] = newTask;
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    if (taskList[taskId].status === 'Severly Important'){
    document.getElementById(taskId).style.borderColor = "red";
    console.log(newTask.status);
}
}

function onStatusChange(event, taskId) {
    changeTaskStatus(event.target.value, taskId);
    renderTaskList();
}

function buildStatusDropdwon(taskId) {
    const statuses = ['Set status of Task','Severly Important', 'Very Important', 'Important', 'Not important', 'Almost no interest'];
    const options = statuses.map(status => `<option placeholder="hei">${status}</option>`);
    return `
        <select onchange="onStatusChange(event, ${taskId})">
            ${options}
        </select>
    `;
}

function saveTask(event, taskId) {
    event.preventDefault();
    const newName = event.target[0].value;
    const hasStarted = event.target[1].checked;
    const startdato = event.target[2].value;
    const endDate = event.target[3].value;
    const message = event.target[4].value;
    const oldTask = JSON.parse(window.localStorage.getItem("taskList"))[taskId] || [];
    const newTask = {
        ...oldTask,
        name: newName,
        started: hasStarted,
        startDato: startdato,
        endDate: endDate,
        message: message,
    };

    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList[taskId] = newTask;
    window.localStorage.setItem("taskList", JSON.stringify(taskList));

    renderTaskList();
}

function buildChangeTaskForm({name, startDato, status, started, message}, taskId) {
    return `
    <form onsubmit="saveTask(event, ${taskId})">
        <div>ID: ${taskId}</div>
        <div>Navn: <input value="${name}" name="name" type="text" /></div>
        <div>Started: <input type="checkbox" name="started"></div>
        <div>StartDate: <input  name="DatoEnd" type="date" data-date="" data-date-format="DD MM YYYY"
        value="2015-08-09"></div>
        <div>EndDate: <input name="DatoEnd" type="date" data-date="" data-date-format="DD MM YYYY"
        value="2015-08-09"></div>
        <div>Message: <input value="${message}" name="message" type="text" /></div>
        <input type="submit" value="Save">
    </form>
    `;
}

function openTaskForm(taskId) {
    const element = document.getElementById(taskId);
    const task = JSON.parse(window.localStorage.getItem("taskList"))[taskId] || [];

    element.innerHTML = buildChangeTaskForm(task, taskId);

}

function buildTaskHtml(task, id) {
    return `
    <div class="task-wrapper" id="${id}">
        <div>ID: ${id}</div>
        <div>Navn: ${task.name}</div>
        <div>Started: ${task.started}</div>
        <div>StartDate: ${task.startDato}</div>
        <div>EndDate: ${task.endDate}</div>
        <div>Message: ${task.message}</div>
        <div>Status: ${task.status}</div>
        ${buildStatusDropdwon(id)}
        <button onclick="openTaskForm(${id})">Edit</button>
    </div>
    `;
}

function renderTaskList(){
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    const taskListUl = document.getElementById("taskList");
    taskListUl.innerHTML = "";
  
    taskList.forEach((task, index) => {
        const taskUl = document.createElement("div");

        taskUl.innerHTML = buildTaskHtml(task, index);
        taskListUl.appendChild(taskUl);
    });
}
   document.addEventListener('DOMContentLoaded', () => {
    renderTaskList();
  });


function createNewTask(event){
   //Stops the URL to be updated
   event.preventDefault();

   const task = document.querySelector("[name='task']").value;
   if (task === ""){
       alert("You have to write something");
   } else {
   const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
   const taskListInfo = {
    name: document.querySelector("[name='task']").value,
    startDato: document.querySelector("[name='Dato1']").value,
    endDate: document.querySelector("[name='DatoEnd']").value,
    users: "none",
    status: 'No current status.',
    message: document.querySelector("[name='taskMessage']").value,
    started: false
};
    
   
   taskList.push(taskListInfo);
   window.localStorage.setItem("taskList", JSON.stringify(taskList));
   
   renderTaskList();
   console.log(taskList);

   event.target.reset();
   } 

function renderEmployeeList(){
    const employeeList = JSON.parse(window.localStorage.getItem("employeeList")) || [];
    const employeeListUl = document.getElementById("employeeList");
    employeeListUl.innerHTML = "";
  
    for (const employee of employeeList){
        const employeeUl = document.createElement("ul");

        employeeUl.innerHTML = `<li>${employee}</li>`;
        employeeListUl.appendChild(employeeUl);
    }
   }
function createNewEmployee(event){
   //Stops the URL to be updated
   event.preventDefault();

   const employee = document.querySelector("[name='employee']").value;
   if (employee === ""){
       alert("You have to write something");
   } else {
   const employeeList = JSON.parse(window.localStorage.getItem("employeeList")) || [];
   employeeList.push(employee);
   window.localStorage.setItem("employeeList", JSON.stringify(employeeList));
   
   renderEmployeeList();

   event.target.reset();
   }
}

function renderAssignList(){
    const assignList = JSON.parse(window.localStorage.getItem("assignList")) || [];
    const assignListUl = document.getElementById("overviewList");
    assignListUl.innerHTML = "";
    
    for (const whoAndWhat of assignList){
        const assignUl = document.createElement("div");

        assignUl.innerHTML = `<div>${whoAndWhat.who} skal gjøre ${whoAndWhat.what}</div>`;
        assignListUl.appendChild(assignUl);
        
    }
}

function createNewAssign(event){
    event.preventDefault();
    const mellom = "skal gjøre"
    const who = document.querySelector("[name='employee2']").value;
    const what = document.querySelector("[name='task2']").value;
    const whoAndWhat = {who: who, what: what};
    if (who === "" || what === ""){
       alert("You have to write something");
   } else {
    const assignList = JSON.parse(window.localStorage.getItem("assignList")) || [];
    assignList.push(whoAndWhat);
    window.localStorage.setItem("assignList", JSON.stringify(assignList));
    console.log(window.localStorage.getItem(JSON.stringify(overviewList)));
    
    renderAssignList();
    event.target.reset();
   }
}
}