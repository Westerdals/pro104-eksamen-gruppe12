// The modal
var modal1 = document.getElementById("category-modal");

// Get the button that opens the modal
var btn1 = document.getElementById("open-category-modal");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

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

function newCategory() {
    event.preventDefault()

    const txt = document.getElementById('txt').value;
    
    const category = {'category': txt  };


    const ctlist = JSON.parse(window.localStorage.getItem('ctlist')) || [];
    ctlist.push(category);
    window.localStorage.setItem('ctlist', JSON.stringify(ctlist));
    renderCategoryList();

    // Clear the text field after submition
    document.getElementById('txt').value = '';
    
}

// Render the user input to the page
function renderCategoryList(){

    // Retrives the value of the localStorage item "ctlist" as a string (text)
    const ctlist = JSON.parse(window.localStorage.getItem('ctlist')) || [];
    const list = document.getElementById('ctlist');
    list.innerHTML = '';

    for (const i in ctlist) {
        const li = document.createElement('li');
        li.innerHTML += `${ctlist[i].category}`;
        list.appendChild(li);
        
    }
}
renderCategoryList();


//When a window updates localStorage, other windows get notified through "addEventListener"
window.addEventListener("storage", function (event) {
    if (event.key === "categoryList") {
        renderCategoryList();
    }
});
