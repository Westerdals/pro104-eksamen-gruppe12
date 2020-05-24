var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startYear = 2000;
var endYear = 2020;
var month = 0;
var year = 0;
var selectedDays = new Array();
var mousedown = false;
var mousemove = false;
const calendarDivs = document.getElementById('calenderDays');

const taskList = JSON.parse(window.localStorage.getItem("taskList")); 
console.log(taskList);
console.log(taskList[0].endDate);

function loadCalendarMonths() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function () {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        })();

        document.getElementById("months").appendChild(doc);
    }
}

function loadCalendarYears() {
    document.getElementById("years").innerHTML = "";

    for (var i = startYear; i <= endYear; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedYear = i;
            return function () {
                year = selectedYear;
                document.getElementById("curYear").innerHTML = year;
                loadCalendarDays();
                return year;
            }
        })();

        document.getElementById("years").appendChild(doc);
    }
}

function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay();       // find where to start calendar day of week

    for (var i = 0; i <= dayofweek - 1; i++) {
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }

    for (var i = 0; i < num; i++) {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + tmp;
        d.className = "day";
        d.innerHTML = tmp;
        d.dataset.day = tmp;

        d.addEventListener('click', function(){
            this.classList.toggle('selected');

            if (!selectedDays.includes(this.dataset.day))
                selectedDays.push(this.dataset.day);

            else
                selectedDays.splice(selectedDays.indexOf(this.dataset.day), 1);
        });

        d.addEventListener('mousemove', function(e){
           e.preventDefault();
            if (mousedown)
            {
                this.classList.add('selected');

                if (!selectedDays.includes(this.dataset.day))
                    selectedDays.push(this.dataset.day);
            }
        });

        d.addEventListener('mousedown', function(e){
            e.preventDefault();
            popUp();
            mousedown = true;
        }); 
        
        d.addEventListener('mouseup', function(e){
            e.preventDefault();
            mousedown = false;
        });

        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}

function daysInMonth(month, year)
{
    var d = new Date(year, month+1, 0);
    return d.getDate();
}

window.addEventListener('load', function () {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    document.getElementById("curMonth").innerHTML = months[month];
    document.getElementById("curYear").innerHTML = year;
    loadCalendarMonths();
    loadCalendarYears();
    loadCalendarDays();
});

// document.getElementById("submit-btn").value = storeData();
// var nameInput = document.getElementById("name").value;

// function storeData (){
//     window.localStorage.setItem('na', JSON.stringify(nameInput));
//}

//JSON.parse(window.localStorage.getItem('name'));

function popUp() {
    document.getElementById("form").style.display = "block";
}

function closeForm() {
    document.getElementById("form").style.display = "none";
  }

  function newTask(){

    const taskName = document.getElementById('name').value;
    const taskDesc = document.getElementById('to-do').value;

    const taskList = {'Task': taskName + " " + taskDesc  + " "  };

    const calenderTask = JSON.parse(window.localStorage.getItem('calenderTask')) || [];
    calenderTask.push(taskList);
    window.localStorage.setItem('TasksListInCalendar', JSON.stringify(calenderTask));
    renderTaskList();
    //clear the text field after submition
    document.getElementById('name').value = '';
    document.getElementById('to-do').value = '';


  }

  function renderTaskList(){

    const calenderTask = JSON.parse(window.localStorage.getItem('calenderTask')) || [];
   
    calendarDivs.innerHTML = '';

    for (const i in calenderTask) 
        d.innerHTML += `${calenderTask[i].taskList}`;
        calendarDivs.appendChild(li);
    }

    

  renderTaskList();