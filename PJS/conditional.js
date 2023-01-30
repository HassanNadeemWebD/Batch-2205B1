console.log("Conditional Statements");

// console.log(typeof marks);
// console.log(def);
// let def = 10
// var marks = prompt("Enter Your Marks");

// if (marks >= 80 ) {
//     console.log("excellent student !");

// }else if(marks > 50) {
// console.log("satisfactory");

// }else{

// console.log("fail");

// }
// let signUppass = 12345;
// let userSignupname = "HassanNadeem"
// let userLogPass = 12345;
// let userLogName = "HassanNadeem"

// if(userLogName === userSignupname && userLogPass === signUppass   ){

// console.log("Login Success !");

// }else{

// console.log("Incorrect username or password !");

// }
let userGender = prompt("Enter Your Gender");
// console.log(); 
switch (userGender.toUpperCase()) {
  case "MALE":
    document.write("<h1> Hello Dear Sir !   </h1>");
    break;
  case "FEMALE":
    document.write("<h1> Hello Dear Mam!   </h1>");
    break;
  case "CUSTOM":
    document.write("<h1> Hello Dear Custom !   </h1>");
    break;
  default:
    document.write("Invalid Gender")
    break;
}
