console.log("JavaScript function");

// function welcome(user) {
//   console.log(`Welcome ${user}`);
// }

//fat arrow function
let welcome = (user) => console.log(`Welcome ${user}`);
welcome("Ayyan");
welcome("Wahaj");
welcome("Rafee");
welcome("Shaheer");

// let username = prompt("Enter Your Name");
// welcome(username);

let add = (num1, num2) => {
  sum = num1 + num2;
  //   console.log(num1 + num2);
  return sum;
};

let res = add(5, 50);
console.log(res);

let sub = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1 - num2);
  } else {
    console.log(num2 - num1);
  }
};

sub(60 , 40);
sub(40 , 60);