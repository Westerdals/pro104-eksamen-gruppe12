
    

function getOverviewList(){
    const taskList = JSON.parse(window.localStorage.getItem('taskList')) || [];
    //let taskList = JSON.stringify(taskListnotStringifield);
    
    const ovList = document.getElementById('ovList');

    let taskListlength = taskList.length;

//console.log(taskListlength);
for(i = 0; i < taskListlength; i++){
    let li = document.createElement('li');
    let taskName = taskList[i].name 
    let taskEndDate = taskList[i].endDate 
    let taskMessage =  taskList[i].message; 
    let taskStatus = taskList[i].status;
    //let taskMember = taskList[i].Member;
    //let taskCategory = taskList[i].category; 

li.innerHTML +=  `
    <h1>${taskName}</h1>
    <p class="taskEndDate">${taskEndDate}</p>
    <p class="taskMessage">${taskMessage}</p>
    <p class="taskStatus">${taskStatus}</p>
`;
    ovList.appendChild(li);
 
}
   


}


getOverviewList();