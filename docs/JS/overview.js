


// Render the user input to the page
function renderOverviewList() {
const ovList = JSON.parse(window.localStorage.getItem('taskList')) || [];
const overviewArray = [];
overviewArray.push(ovList);
const list = document.getElementById('ovList');
list.innerHTML = '';



for (var i = 0; i < overviewArray[0].length; i++) {
    console.log(overviewArray)
    console.log(overviewArray[0][i].name);
    let result = overviewArray[0].map(a => a.name);
    let endDateResult = overviewArray[0].map(a => a.endDate);
    let taskOverView = [];
    taskOverView.push(result);
    let dateOverView = [];
    dateOverView.push(endDateResult);
    const li = document.createElement('li');
    li.innerHTML += `${taskOverView[0][i]}` + " " + `${dateOverView[0][i]}`;
    list.appendChild(li);
    
    

}






    // Retrives the value of the localStorage item "ovList" as a string (text)
    

  

    }



renderOverviewList();


//When a window updates localStorage, other windows get notified through "addEventListener"
window.addEventListener("storage", function (event) {
    if (event.key === "taskList") {
        renderCategoryList();
    }
});



// function buildChangeTaskForm({name, startDato, status, started, message}, taskId) {
//     return `
//     <form onsubmit="saveTask(event, ${taskId})">
//         <div>ID: ${taskId}</div>
//         <div>Navn: <input value="${name}" name="name" type="text" /></div>
//         <div>Started: <input type="checkbox" name="started"></div>
//         <div>StartDate: <input  name="DatoEnd" type="date" data-date="" data-date-format="DD MM YYYY"
//         value="2020-05-24"></div>
//         <div>EndDate: <input name="DatoEnd" type="date" data-date="" data-date-format="DD MM YYYY"
//         value="2020-05-09"></div>
//         <div>Message: <input value="${message}" name="message" type="text" /></div>
//         <input type="submit" value="Save">
//     </form>
//     `;
