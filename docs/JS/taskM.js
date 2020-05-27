// The modal
var modal = document.getElementById("tasker-modal");

// Get the button that opens the modal
var btn = document.getElementById("open-tasker-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function (event) {
    modal.style.display = "block";
    localStorage.removeItem("assignedMembers");
    document.getElementById('addedMembersUl').innerHTML = "";
    
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    localStorage.removeItem("assignedMembers");
    document.getElementById('addedMembersUl').innerHTML = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        localStorage.removeItem("assignedMembers");
        document.getElementById('addedMembersUl').innerHTML = "";
    }
};
// adds event listeners to list and list-item 
function addDraggableEventListers() {
    const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');


let draggedItem = null;
// for loop for every draggable item and dropzones, adds eventlistners 
for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
            item.style.display = 'none';
            console.log(item);
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
            console.log('drop');
            if(draggedItem) {
                this.append(draggedItem);
            }
            console.log(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}
}
// function to change the status of the task
function changeTaskStatus(newStatus, taskId) {
    console.log("BYTTER STATUS");
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    const oldTask = taskList[taskId];
    const newTask = oldTask;
    newTask.status = newStatus;
    taskList[taskId] = newTask;
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    if (taskList[taskId].status === 'Severly Important'){
    const borderColor = document.getElementById(`${taskId}`);
    borderColor.style.borderColor = "red";
    
}
}
// function to render the tasklist when changed and get the event target
function onStatusChange(event, taskId) {
    changeTaskStatus(event.target.value, taskId);
    renderTaskList();
}
//builds the dropdownmenu for tasks
function buildStatusDropdwon(taskId) {
    const statuses = ['Set status of Task','Severly Important', 'Very Important', 'Important', 'Not important', 'Almost no interest'];
    const options = statuses.map(status => `<option placeholder="hei">${status}</option>`);
    return `
        <select  id="taskDropMenu" onchange="onStatusChange(event, ${taskId})">
            ${options}
        </select>
    `;
}
//gets data for category in localstorage
function pushIntocategory(){
    const ctlist = JSON.parse(window.localStorage.getItem("ctlist")) || [];
    const categoryDropdown = document.getElementById("categoryDropDown");

let ctLength = ctlist.length;
// loops through all categories in array and creates a new element for each
for(i = 0; i < ctLength; i++){
    const categoryOption = document.createElement('option');
    let categoryName = ctlist[i].category;
    let categoryColor = ctlist[i].color;
    categoryOption.style.color = `${categoryColor}`;
    categoryOption.innerHTML = `${categoryName}`;
    categoryDropdown.appendChild(categoryOption);


}
}

// function for getting data from members
function pushIntoMembers(){
const memberList = JSON.parse(window.localStorage.getItem('memberList')) || [];
   const memberDropDown = document.getElementById('membersDropDown');
let membLength = memberList.length;
// loops through members and and displays firstname
for(i = 0; i < membLength; i++){
const memberOption = document.createElement('option');
let memberFirstName = memberList[i].firstName;
let memberLastName = memberList[i].lastName;
let memberEmail = memberList[i].email;

memberOption.innerHTML = `${memberFirstName}`;
memberDropDown.appendChild(memberOption);

}

}

pushIntoMembers();
pushIntocategory();

// adds members too task when window appears
function addMemberTo(event) {
    event.preventDefault();
    const oldMembersList = JSON.parse(localStorage.getItem('assignedMembers')) || [];
    let newMember = document.querySelector("[name='membersDrop']").value;
    const addedMembersUl = document.getElementById('addedMembersUl');
    oldMembersList.push(newMember); 
    console.log(oldMembersList);
    addedMembersUl.innerHTML = `${oldMembersList}` + "  ";

    localStorage.setItem('assignedMembers', JSON.stringify(oldMembersList));
   
}
// saves the changes made to task and updates it
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
//function to deleteTask
function deleteTask(taskId) {
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.splice(taskId, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    renderTaskList();

}
// function to build taskform element
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
        <select name="addMoreMembers"></select>
        ${buildStatusDropdwon()}
        <input type="submit" class="buttons" value="Save">
    </form>
    `;
}
//function to open taskform 
function openTaskForm(taskId) {
    const element = document.getElementById(taskId);
    const task = JSON.parse(window.localStorage.getItem("taskList"))[taskId] || [];

    element.innerHTML = buildChangeTaskForm(task, taskId);

}
//function to build the html element
function buildTaskHtml(task, id) {
    return `
    <div class="list-item" id="${id}" draggable="true" ondragstart="">
        <div>Navn: ${task.name}</div>
        <div>Started: ${task.started}</div>
        <div>StartDate: ${task.startDato}</div>
        <div>EndDate: ${task.endDate}</div>
        <div>Message: ${task.message}</div>
        <div>Status: ${task.status}</div>
        <div>Users: ${task.users}</div>
        <div>Catogory: ${task.cat}</div>
        ${buildStatusDropdwon(id)}
        <button id="editTaskBtn" class="buttons" onclick="openTaskForm(${id})">Edit</button>
        <button id="deleteTaskBtn" class="buttons" onclick="deleteTask(${id})" >Delete</button>
    </div>
    `;
}
// renders the task list with new data
function renderTaskList(){
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    const taskListUl = document.getElementById("taskList");
    taskListUl.innerHTML = "";
  
    taskList.forEach((task, index) => {
        const taskUl = document.createElement("div");

        taskUl.innerHTML = buildTaskHtml(task, index);
        taskListUl.appendChild(taskUl);
        addDraggableEventListers();
    });
}
   document.addEventListener('DOMContentLoaded', () => {
    renderTaskList();
  });

// function to create new task
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
    users: JSON.parse(localStorage.getItem("assignedMembers")) || [],
    status: 'No current status.',
    message: document.querySelector("[name='taskMessage']").value,
    cat: document.querySelector("[name='categoryDrop']").value,
    started: false
};
    document.getElementById('addedMembersUl').innerHTML = "";
    localStorage.removeItem("assignedMembers");
   
   taskList.push(taskListInfo);
   window.localStorage.setItem("taskList", JSON.stringify(taskList));
   renderTaskList();
   console.log(taskList);

   event.target.reset();
   } 

}