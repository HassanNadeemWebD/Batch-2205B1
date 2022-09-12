// console.log(document.body.innerHTML);
function login(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
document.write("Name: " + name + " <br /> ")
document.write("Email: " + email + " <br /> ")
document.write("Password: " + password + " <br /> ")




// storing values in  local storage
localStorage.setItem("Name",name)
localStorage.setItem("Email",email)
localStorage.setItem("Password",password)
sessionStorage.setItem("Name",name)
sessionStorage.setItem("Email",email)
sessionStorage.setItem("Password",password)
// retreiving data from local storage
let myName = localStorage.getItem("Name")

console.log(myName); 


}

document.getElementById("table").style.display = "block";

    console.log( localStorage.getItem("Name"));

// console.log(document.getElementById("heading").innerHTML);

// document.getElementById("heading").innerHTML = "Logout"
// console.log(document.getElementById("paraDiv").innerHTML);
// document.getElementsByClassName("paraDiv").innerHTML = 
// document.getElementById("heading").style.color = "red"

// function display() {

//     if (document.getElementById("paraDiv").style.display == "block") {
//         document.getElementById("paraDiv").style.display = "none"
//     }

//     else {
//         document.getElementById("paraDiv").style.display = "block"
//     }

// }

// console.log(document.getElementById("name"));
