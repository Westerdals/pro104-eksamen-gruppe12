
function renderOverviewList() {
    const ovList = JSON.parse(window.localStorage.getItem('taskList')) || [];
    const overviewArray = [];
    overviewArray.push(ovList);
    const list = document.getElementById('ovList');
    list.innerHTML = '';
    console.log(overviewArray);
    
    
    
    for (var i = 0; i < overviewArray[0].length; i++) {
    
        console.log(overviewArray[0][i].name);
        let result = overviewArray[i].map(a => a.name);
        let endDateResult = overviewArray[i].map(a => a.endDate);
        let taskOverView = [];
        taskOverView.push(result);
        let dateOverView = [];
        dateOverView.push(endDateResult);
        const li = document.createElement('li');
        li.innerHTML += `
        Task Name: ${taskOverView[0][i]}` 
        + '<br></br>' + 
        ` End Date: ${dateOverView[0][i]}`;
        + "\n " +
        list.appendChild(li);
        
        
    
    }
    
    
    
    
    
    
        // Retrives the value of the localStorage item "ovList" as a string (text)
    }
    
    
    
    renderOverviewList();

// function getOverviewList(){
//     const taskListnotStringified = JSON.parse(window.localStorage.getItem('taskList')) || [];
//     const taskList = JSON.stringify(taskListnotStringified);
//     const ovList = document.getElementById('ovList');
//     const li = document.createElement('li');
//     taskList.toString();

// for(i = 0; i < taskList.length; i++){
//     li.innerHTML += `
//     ${taskList[i]}
//     `;
//     ovList.appendChild(li)
//     console.log(taskList[i]);
 
// }
   


// }


// getOverviewList();