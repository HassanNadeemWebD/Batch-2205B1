let str = "hassan nadeem";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);
console.log(upperCaseStr.toLowerCase())
let num = 889;
let numStr = num.toString();
console.log(numStr);
console.log(typeof numStr)

// let userInput = prompt("Enter any alphabet").toLowerCase();
// userInput.toLowerCase()

// switch (userInput) {
//     case "a" :
//         console.log("Vowel")

//         break;
//     case "e":
//         console.log("Vowel")

//         break;
//     case "i":
//         console.log("Vowel")

//         break;
//     case "o":
//         console.log("Vowel")

//         break;
//     case "u":
//         console.log("Vowel")

//         break;
//     default:
//         console.log("Consonent")
//         break;
//  
// }

function myfunc() {
    let userName = prompt("Enter Your Name").toUpperCase();
    
  
    document.getElementById("welcome").innerHTML = "Welcome " + userName;
}

for (let i = 1;  i <= 10; i++) {

// if(i == 9){

    document.write(" " + i)
// }
// else{
    // document.write(" "+ " is omitted")
// }
    
    
}

// let j = 1 ;

// while (  j <= 10 ) {

//     document.write(" " + j);

//     i++;

    
// }




// myfunc();
