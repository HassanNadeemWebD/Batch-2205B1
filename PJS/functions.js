console.log("JavaScript function");

function welcomeUser(user) {
  console.log(`Welcome ${user}`);
}

welcomeUser("Zubair");

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
  return "sum";
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

sub(60, 40);
sub(40, 60);
// console.log(object);

// let obj = {
//   name: "Hassan Nadeem",
//   city: "Karachi",
//   log: () => {
//     console.log("I am a method " );
//     // console.log(this.name);
//   },
// };

// obj.log();

function Constructobj(nameValue, cityValue) {
  this.name = nameValue;
  this.city = cityValue;
}

// let Constructobj = (nameValue , cityValue) =>{
// this.name = nameValue;
// this.city= cityValue;

// }

let zainObj = new Constructobj("Zain", "Karachi");
let danishObj = new Constructobj("Danish", "Karachi");
// console.log(new Constructobj("Zain" , "Karachi"));
console.log(zainObj);
console.log(danishObj);

let obj = {
  name: "Ali",
  contact: "0341823398",
  gender: "male",
  age: 20,
  result: true,
  fatherDetails: {
    fatherName: "Usman",
    contact: "0314568987",
    occupation: "Business",
    Filer: false,
    debitCards: ["BAHL", "HBL", "MBL", "NBP", "MCB"],
  },
};

// let obj1=new Constructobj("name","contact","gender")
// console.log(obj1)

function StudentInfo(
  stdName,
  stdcontact,
  stdGender,
  stdAge,
  stdResult,
  fatherName,
  fatherContact,
  fatherOccup,
  fatherFiler
) {
  this.name = stdName;
  this.contact = stdcontact;
  this.gender = stdGender;
  this.age = stdAge;
  this.result = stdResult;
  this.fatherDetails = new FatherDetails(
    fatherName,
    fatherContact,
    fatherOccup,
    fatherFiler
  );
}

function FatherDetails(fatherName, fatherContact, fatherOccup, fatherFiler) {
  this.fatherName = fatherName;
  this.contact = fatherContact;
  this.occupation = fatherOccup;
  this.Filer = fatherFiler;
  // this.debitCards= ["BAHL", "HBL", "MBL", "NBP", "MCB"],
}

let newObj = new StudentInfo(
  "Maaz",
  "03123654698",
  "Male",
  "20",
  true,
  "Monis",
  "03251568987",
  "Business",
  "Yes"
);
console.log(newObj);


let d = new Date;
console.log(d);
// console.log(d.getDay());
console.log(d.getMonth());