// The modal
var modal1 = document.getElementById("category-modal");

// Get the button that opens the modal
var btn1 = document.getElementById("open-category-modal");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-category-modal")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

function createNewTask(){

const taskName = document.getElementById('taskInput').value;
const startDate = document.getElementById('Dato1').value;
const endDate = document.getElementById('DatoEnd').value;
const taskMessage = document.getElementById('tMessage').value;
}





function buildStatusDropdwon(taskId) {
    const statuses = ['Set status of Task','Severly Important', 'Very Important', 'Important', 'Not important', 'Almost no interest'];
    const options = statuses.map(status => `<option placeholder="hei">${status}</option>`);
    return `
        <select  id="taskDropMenu" onchange="onStatusChange(event, ${taskId})">
            ${options}
        </select>
    `;
}


function buildCategoryDropdwon() {
    const ctList = JSON.parse(window.localStorage.getItem('ctlist')) || [];

}
