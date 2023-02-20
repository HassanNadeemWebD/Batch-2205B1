console.log(document.body.h1);

// console.log(document.getElementById("h1").innerText);
// console.log(document.getElementsByClassName("para")[0].innerText);
// console.log(document.getElementsByClassName("para")[1].innerText);
// console.log(document.getElementsByClassName("para")[2].innerText);

// let arr = document.getElementsByClassName("para");
// // let arr = [1,2,3,4,5]
// // console.log(para);

// // array.forEach(element => {

// // });
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i].innerHTML);
//   console.log(arr[i].innerText);
// }

// console.log(document.querySelector("#h1").innerHTML = "Hello World");
// console.log(document.querySelectorAll(".para")[0].innerHTML);
// document.querySelectorAll(".para").forEach(element => {
//     console.log(element.innerHTML);

// });

//Events

// document.getElementById("heading").style.backgroundColor = "red"

let addClass = () => {
  let element = document.getElementsByTagName("span");
  console.log(element);
  element[0].classList.toggle("spanTxt");
  //   element[0].innerText = "Document Object Model";
  if (element[0].innerText == "DOM Manipulation") {
    console.log("if True");
    element[0].innerText = "Document Object Model";
  } else {
    element[0].innerText = "DOM Manipulation";
  }

  //   element[0].classList.remove("spanTxt");
};

let showImg = () => {   
let aptechImg =  document.querySelector("#aptech")
// aptechImg.style.display = "block"

aptechImg.setAttribute("alt","aptechImg")
aptechImg.removeAttribute("style");
aptechImg.src = "https://aptech-education.com.pk/images/newslider/web-1-05.jpg"
// aptechImg.setAttribute("src","https://aptech-education.com.pk/images/newslider/web-1-05.jpg")
console.log(aptechImg);


};


document.getElementById("addBtn").addEventListener("click",()=>{

    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let sum = parseFloat(num1) +  parseFloat(num2)
    document.getElementById("res").innerText += sum
    document.getElementById("res").style.display = "block"
    // console.log(num1);






})



