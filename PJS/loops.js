// let num = parseInt(prompt("Enter Number for factorial"));
// for(let j = 1; j<=10; j++ ){

// res = num * j;
// document.write(num + " "+ "x" + " "+ j + " " + "="+  " "+ res + "<br>" )
// document.write(`${num} x ${j} = ${res} <br> `)

// }

// for (let i = 1; i < 100; i++) {
//   document.write( i + " Hassan  <br> ");
// }

// let a = 1;

// while (a <= 10) {
//   document.write(a + " Usama <br>");
//   a++;
// }

// do {

//     document.write( a+ " Usama <br>" );
//     a++

// } while (a<=10);

// let num = parseInt(prompt("Enter Number for factorial"));
// let fact=1;
// for(let i = num; i>=1; i-- ){

// fact *= i;  // fact = fact * i

// }

// console.log(fact);

let d = 50;
let res = 0;

for (d; d <= 50; d--) {

  let a = parseInt(prompt("Enter Your Number"));

  if (a < 0) {
    alert("Negative number");
    document.write(res);
    break;

  } else {
    res += a;
  }

}
