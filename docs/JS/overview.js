


// Render the user input to the page
function renderOverviewList() {

const overviewArray = []

    // Retrives the value of the localStorage item "ovList" as a string (text)
    const ovList = JSON.parse(window.localStorage.getItem('taskList')) || [];
    overviewArray.push(ovList);
    const list = document.getElementById('ovList');
    list.innerHTML = '';
var ovLength = overviewArray.length;
  
    
for (var i = 0; i < ovLength; i) {
        const li = document.createElement('li');
        li.innerHTML += ` ${overviewArray}`;
        list.appendChild(li);
        

    }
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
