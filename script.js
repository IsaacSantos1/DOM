console.log(document.title);
document.getElementById('taskName1').innerHTML = 'Complete the project documentation';
// What is the different between Document and document in DOM

let task=document.getElementById('taskName2').innerHTML;
console.log(task+" "+"is selected");

document.getElementById("compl1").addEventListener("click",function(){
    document.getElementById('taskName2').style.textDecoration = "line-through";
    document.getElementById("taskName3").style.color="red";
}); 

document.getElementById("addTask").addEventListener("click", function () {
    event.preventDefault(); 
    let newTask = document.getElementById("new-task").value; // Fixed typo
    console.log(newTask);
    document.getElementById("taskname3").innerHTML = newTask;
});


// In the Document Object Model (DOM), "Document" refers to the interface that represents the entire HTML or XML document. It is a global object that provides methods and properties to interact with the content of the document, such as accessing elements, creating new elements, and manipulating the structure of the document.