
// function renderOverviewList() {
//     const ovList = JSON.parse(window.localStorage.getItem('taskList')) || [];
//     const overviewArray = [];
//     overviewArray.push(ovList);
//     const list = document.getElementById('ovList');
//     list.innerHTML = '';
//     //console.log(overviewArray);
    
    
    
//     for (var i = 0; i < overviewArray[0].length; i++) {
    
//         //console.log(overviewArray[0][i].name);
//         let result = overviewArray[i].map(a => a.name);
//         let endDateResult = overviewArray[i].map(a => a.endDate);
//         let taskOverView = [];
//         taskOverView.push(result);
//         let dateOverView = [];
//         dateOverView.push(endDateResult);
//         const li = document.createElement('li');
//         li.innerHTML += `
//         Task Name: ${taskOverView[0][i]}` 
//         + '<br></br>' + 
//         ` End Date: ${dateOverView[0][i]}`;
//         + "\n " +
//         list.appendChild(li);
        
        
    
//     }
    
//         // Retrives the value of the localStorage item "ovList" as a string (text)
//     }
    
    
    
    

function getOverviewList(){
    const taskList = JSON.parse(window.localStorage.getItem('taskList')) || [];
    //let taskList = JSON.stringify(taskListnotStringifield);
    const ovArray = {

    }
    const ovList = document.getElementById('ovList');

    let taskListlength = taskList.length;

//console.log(taskListlength);
for(i = 0; i < taskListlength; i++){
    let div = document.createElement('div');
    let taskName = taskList[i].name 
    let taskEndDate = taskList[i].endDate 
    let taskMessage =  taskList[i].message; 
    let taskStatus = taskList[i].status;
    //let taskMember = taskList[i].Member;
    //let taskCategory = taskList[i].category; 

    div.innerHTML +=  `
    <div class="singleTaskList">
    <h1 class="taskListName">${taskName}</h1>
    <p class="taskEndDate">${taskEndDate}</p>
    <p class="taskMessage">${taskMessage}</p>
    <p class="taskStatus">${taskStatus}</p>
</div>
`;
    ovList.appendChild(div);
 
}
   


}


getOverviewList();