let age = prompt("Please Enter Your Age: ");
let a = age !== 19 ;
console.log(a)

if(age ==18)
{

console.log("You can enter in class ! Your Age is Equals to 18")

}
else if (age > 18) {
    console.log("You can enter in class ! Your Age is Greater Than 18")
}

else{

    console.log("restricted age")
}

//Logical Operators
//  AND OR NOT

let perc = prompt("Enter Your Percentage: ");

if (perc >= 80 && perc <= 100) {
  console.log("A-One Grade");
} else if (perc >= 70 && perc < 80) {
  console.log("A Grade");
} else if (perc >= 60 && perc < 70) {
  console.log("B Grade");
} else {
  console.log("Fail");
}




let value1 = true;
let value2 = false;
// let decision = true || false ; 

let decision = !(18 >= 19)
console.log(decision);



let arr = [1 , 2 , 3 , 4 , 5 , "Apple", 7];
console.log(arr)
console.log("index of 4 is"+" " + arr.indexOf("Apple"));
let userInput = prompt("Enter the name of any object")

console.log(arr[3])
console.log(arr[5])
console.log(arr.length)
console.log(arr)
document.write(arr[6])
arr.push("Mango");
// arr.push(userInput);
console.log(arr)
console.log(arr.pop())
console.log(arr)
arr.pop();
console.log(arr)
arr.pop();
console.log(arr)
console.log(arr.unshift("Uzair"))

console.log(arr)
console.log(arr.shift());
console.log(arr)
console.log(arr.slice(2 , 7))
console.log(arr)
console.log(arr.splice(3, 3 ))
console.log(arr);
let str = "Hassan Nadeem";
console.log(str.slice(1, 4))
console.log(str.length)
console.log(str)
let obj = {

    name: "Hassan Nadeem",
    contact: "03456",
    result: true,
    Gender: "male",
    salary: 10000,
    Hobbies: ["Cricket", "Study", "Software"],
    bio: {
        fatherName: "Nadeem Ahmed",
        Occupation: "Developer",
        Relation: true

    }


}
console.log(obj);
document.write(obj.name + " " + obj.salary + " " + obj.Hobbies[2])
console.log(obj.name + "\t" + obj.salary + "\t" + obj.Hobbies[2] + "Father Name is " + "\t" + obj.bio.fatherName)
let objStr =  JSON.stringify(obj);
document.write(objStr);
console.log(objStr);
console.log(JSON.parse(objStr));
document.write(JSON.parse(objStr))
