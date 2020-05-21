
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*

// Get the modal
var modal = document.getElementById("cat-modal");

// Get the button that opens the modal
var btn = document.getElementById("open-cat-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function newCategory() {
    event.preventDefault();

    const newCat = document.getElementById('addCat').value;

    const cate = { 'cat': newCat };

    const catList = JSON.parse(window.localStorage.getItem('catList')) || [];
    catList.push(cat);
    window.localStorage.setItem('catList', JSON.stringify(catList));
    renderCatList();

    // Clears the text field after submition
    document.getElementById('addCat').value = '';
}

// Renders the user input to the page
function renderTaskList() {

    // Retrives the value of the localStorage item "taskList" as a string (text)
    const catList = JSON.parse(window.localStorage.getItem("catList")) || [];
    const list = document.getElementById('catList');
    list.innerHTML = '';

    for (const i in catList) {
        const li = document.createElement('li');
        li.innerHTML = `${catList[i].cat}`;
        list.appendChild(li);
    }
}
renderTaskList();

// When a window updates localStorage, other windows get notified through "addEventListener"
window.addEventListener("storage", function (event) {
    if (event.key === "catList") {
        renderCatList();
    }
});
 */
