let element = document.getElementById("heading").innerHTML;

console.log(element)
console.log(document.getElementById("heading").innerHTML) ;
function change(){
document.getElementById("heading").innerHTML = "LEARNING DOM"
}

function add(){
let num1 = document.getElementById("num1").value;

console.log()
let num2 = document.getElementById("num2").value;
let sum = parseInt(num1) + parseInt(num2);
console.log(sum)
}


let myQuery =document.querySelectorAll(".inputField"); 

console.log(myQuery)
// console.log(element)