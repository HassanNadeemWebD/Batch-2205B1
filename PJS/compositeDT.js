let arr = ["apple", "mango", 1, 2, 3, true, null, undefined];
// console.log(arr);

// console.log(arr[5]);

// console.log(arr.pop());
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.push("Uzair");
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// arr.unshift("Zain");
// console.log(arr);
// console.log(arr);
// let numArr = arr.slice(2, 5);
// console.log(numArr);
// console.log(arr);

// console.log(arr);
// console.log(arr.splice(2,5));
// console.log(arr);
// console.log(arr.splice(2,1));

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

// document.write(typeof arr)
console.log(obj.name);
// document.write(obj.name + " "+ obj.gender)
document.write(`Customer Name is  ${obj.name} and Gender is ${obj.gender}`);
// document.write(obj)


console.log(obj.fatherDetails.debitCards[1]);