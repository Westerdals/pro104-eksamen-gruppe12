



function renderTaskList(){
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    let nFinishDate =[];
    const finishDate = JSON.stringify(window.localStorage.getItem(nFinishDate)) || [];
    const taskListUl = document.getElementById("taskList");
    taskListUl.innerHTML = "";
  
    for (const task of taskList){
        const taskUl = document.createElement("ul");

        taskUl.innerHTML = `<li>${task} Deadline: ${nFinishDate}</li>`;
        taskListUl.appendChild(taskUl);
    
    }
   }

function createNewTask(event){
   //Stops the URL to be updated
   event.preventDefault();
   const task = document.querySelector("[name='task']").value;
   if (task === ""){
       alert("You have to write something");
   } else {
   const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
   let finish = localStorage.getItem("nFinishDate");  
   const nFinishDate = [];
   window.localStorage.setItem("finishDate", nFinishDate) || [];
   taskList.Date = Date.now();
   taskList.push(task);
   window.localStorage.setItem("taskList", JSON.stringify(taskList));
   const setfinishDate = document.querySelector("[name='Dato']").value || [];
    const finishDate = window.localStorage.setItem("finishDate", nFinishDate);
   window.localStorage.setItem("finishDate", setfinishDate);
   finish = finish ? finish.split(',') : [];
   nFinishDate.push(setfinishDate);
   window.localStorage.setItem("nFinishDate", JSON.stringify(nFinishDate));

 
  
   
   renderTaskList();

   event.target.reset();
   console.log(nFinishDate);
   } 
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
   } else {
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
   } else {
    const assignList = JSON.parse(window.localStorage.getItem("assignList")) || [];
    assignList.push(whoAndWhat);
    window.localStorage.setItem("assignList", JSON.stringify(assignList));
    console.log(window.localStorage.getItem(JSON.stringify(overviewList)));
    
    renderAssignList();
    event.target.reset();
   }
}
