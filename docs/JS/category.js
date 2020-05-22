
var categoryModal = document.getElementById("category-modal");
var categoryBtn = document.getElementById("open-category-modal");
var span1 = document.getElementsByClassName("close1")[0];

categoryBtn.onclick = function() {
  categoryModal.style.display = "block";
}
span1.onclick = function(){
  categoryModal.style.display = "none";
}
window.onclick = function(event){
  if(event.targt == categoryModal){
    categoryModal.style.display = "none";
  }
}

function newCategory(){
  event.preventDefault();

  const categorytxt = document.getElementById('addCategorytxt').value;

   const category = {'Category':  categorytxt };

const categoryList = JSON.parse(window.localStorage.getItem('categoryList')) || [];
categoryList.push(category);
window.localStorage.setItem('CategoryList', JSON.stringify(categoryList));
renderCategoryList();

//reset the text field after submitted
document.getElementById('addCategorytxt').value = '';

}
   
// render the user input to the page
function renderCategoryList(){

  // Get`s the value of the localstorage item "categoryList as a string"
  const categoryList = JSON.parse(window.localStorage.getItem('categoryList')) || [];
  const list1 = document.getElementById('categoryList');
  list1.innerHTML = '';

  for (const i in categoryList) {
    const li1 = document.createElement('li');
    li1.innerHTML += `${categoryList}`;
    list1.appendChild(li1);
}


  }

  
renderCategoryList();

// window.addEventListener("storage", function (event) {
//   if (event.key === "memberList") {
//       renderTaskList();
//   }
// });