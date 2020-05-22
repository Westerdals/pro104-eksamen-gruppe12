
var modal1 = document.getElementById("category-modal");
var btn1 = document.getElementById("open-category-modal");
var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function(){
  modal1.style.display = "none";
}
window.onclick = function(event){
  if(event.targt == modal1){
    modal1.style.display = "none";
  }
}

function newCategory(){
  event.preventDefault();

  const categorytxt = document.getElementById('txt').value;

   const category = {'Category':  categorytxt };
   

const ctlist = JSON.parse(window.localStorage.getItem('ctlist')) || [];
ctlist.push(category);
window.localStorage.setItem('CategoryList', JSON.stringify(ctlist));
//renderCategoryList();

//reset the text field after submitted
document.getElementById('txt').value = '';

}
   
// render the user input to the page
function renderCategoryList(){

  // Get`s the value of the localstorage item "ctlist as a string"
  const ctlist = JSON.parse(window.localStorage.getItem('ctlist')) || [];
  const list1 = document.getElementById('ctlist');
  //list1.innerHTML = '';

  for (const i in ctlist) {
    const li1 = document.createElement("li");
    li1.innerHTML += `${ctlist[i].category}`;
    list1.appendChild(li1);
}


  }

  
renderCategoryList();

// window.addEventListener("storage", function (event) {
//   if (event.key === "memberList") {
//       renderTaskList();
//   }
// });