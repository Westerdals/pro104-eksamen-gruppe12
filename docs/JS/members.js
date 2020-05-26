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
    let  imgFile = document.getElementById('addImage').dataset.image;
  

    
    
    const member = {
        firstName: newMember,
        lastName: lastName,
        email: email,
        image: imgFile
    };


    const memberList = JSON.parse(window.localStorage.getItem('memberList')) || [];
    memberList.push(member);
    window.localStorage.setItem('memberList', JSON.stringify(memberList));
    renderMemberList();
    //console.log(memberList);
    // Clear the text field after submition
    document.getElementById('addMember').value = '';
    document.getElementById('addLastName').value = '';
    document.getElementById('addEmail').value = '';
    document.getElementById('addImage').value = '';
    
    //console.log(member);

}

// Render the user input to the page
function renderMemberList() {

    // Retrives the value of the localStorage item "memberList" as a string (text)
    const memberList = JSON.parse(window.localStorage.getItem('memberList')) || [];
    const list = document.getElementById('memberList');
    const imageDiv = document.getElementById('imageDiv');
    let imagePath = 
    
    list.innerHTML = '';

    for (const i in memberList) {
        const li = document.createElement('li');

        li.innerHTML += `
        <h4>${memberList[i].firstName}</h4> <h4>${memberList[i].lastName}</h4>
        <p>${memberList[i].email}</p> 
        <div id="${imageDiv}"> <img src="/docs/img/img1.png"> </div>
        <div id="${imageDiv}"> <img src="/${memberList[i].image}" </div>
        
        `;
       
        
        list.appendChild(li);
       

        
    }
}
renderMemberList();


//When a window updates localStorage, other windows get notified through "addEventListener"
window.addEventListener("storage", function (event) {
    if (event.key === "categoryList") {
        renderMemberList();
    }
});