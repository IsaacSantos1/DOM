document.getElementById("changeP").innerHTML="1";
document.getElementById("addButton").innerHTML="add value";

//I am selecting the button and adding an event listener for a mouse click
//will run a function
document.getElementById("addButton").addEventListener("click", function(){
    let origin=document.getElementById("changeP").innerHTML;
    console.log(origin);
    origin=parseInt(origin)+1;
    document.getElementById("changeP").innerHTML=origin;
});
/*
document.getElementById("MultiplicationButton").addEventListener("click",function(){
    let origin = document.getElementById("changeP").innerHTML;
    let arr=[];
    for(let a =0;a<5;a++){
        arr.push(parseInt(origin)*(a+1));
    }

    document.getElementById("table").innerHTML=arr.join(",");
    
});
*/
document.getElementsByClassName("card")[0].style.backgroundColor="red";


document.getElementById("addButton").addEventListener("click", function(){
    let origin=document.getElementById("data").innerHTML;
    console.log(origin);
    origin=parseInt(origin)+1;
    document.getElementById("data").innerHTML=origin;
});

document.getElementById("MultiplicationButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    let arr=[];
    for(let a=1;a<=10;a++){
        let value = a*parseInt(origin);
        console.log(value);
        document.getElementById("data"+a).innerHTML=value;
    }
});

document.getElementById("BinaryButton").addEventListener("click",function(){
document.getElementById("Binary1").innerHTML= decimalToBinary(parseInt(document.getElementById("changeP").innerHTML));
});
function decimalToBinary(decimal) {
    let binary = [];

    let quotient = decimal;
    while (quotient > 0) {
      let remainder = quotient % 2;
      binary.push(remainder);

      quotient = Math.floor(quotient / 2);
    }
    return binary.reverse().join('');
  }


// Now the card has a counter, making it functional, can imcrament
//the counter by 1 each time the button is clicked
//Different controls for addEventListener: Click, mouseUp, mouseDown,KeyboardUp,KeyboardDown
//getElementByTagName and getElementByClassName both return an array
//Tag Name works on multiple elements of the same type
//Class Name is for divs 
// Made by Isaac and Dante