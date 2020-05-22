// The modal
var modal = document.getElementById("member-modal");

// Get the button that opens the modal
var btn = document.getElementById("open-member-modal");

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

function newMember() {
    event.preventDefault()

    const newMember = document.getElementById('addMember').value;
    const lastName = document.getElementById('addLastName').value;
    const email = document.getElementById('addEmail').value;
   
     const member = {'member': newMember + " " + lastName + ", " + email};


    const memberList = JSON.parse(window.localStorage.getItem('memberList')) || [];
    memberList.push(member);
    window.localStorage.setItem('memberList', JSON.stringify(memberList));
    renderMemberList();

    // Clear the text field after submition
    document.getElementById('addMember').value = '';
    document.getElementById('addLastName').value = '';
    document.getElementById('addEmail').value = '';
       
    
    
}



// Render the user input to the page
function renderMemberList(){

    // Retrives the value of the localStorage item "memberList" as a string (text)
    const memberList = JSON.parse(window.localStorage.getItem('memberList')) || [];
    const list = document.getElementById('memberList');
    list.innerHTML = '';

    for (const i in memberList) {
        const li = document.createElement('li');
        li.innerHTML += `${memberList[i].member}`;
        list.appendChild(li);
    }
}
renderMemberList();


// When a window updates localStorage, other windows get notified through "addEventListener"
// window.addEventListener("storage", function (event) {
//     if (event.key === "categoryList") {
//         renderTaskList();
//     }
// });