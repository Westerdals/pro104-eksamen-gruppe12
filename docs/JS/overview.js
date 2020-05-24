


renderOverviewList();
function renderOverviewList(){

    const overview = {'overview': " " };
    

    const overviewList = JSON.parse(window.localStorage.getItem('taskList')) || [];
    overviewList.push(overview);
    const list = document.getElementById('overviewList');
    list.innerHTML = '';
   
  for(const i in overview){
 const li = document.createElement('li');
    li.innerHTML += `<p>${overview}</p>`;
    list.appendChild(li);
   
}

}
renderOverviewList();

window.addEventListener("storage", function (event) {
    if (event.key === "taskList") {
        renderMemberList();
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
