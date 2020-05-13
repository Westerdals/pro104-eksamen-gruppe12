function toDoList(){
    var item = document.getElementById("toDoInput").nodeValue;
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("toDoList").appendChild(newItem)
   
    

}