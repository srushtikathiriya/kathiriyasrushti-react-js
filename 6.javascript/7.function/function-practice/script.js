// example-1 
// add('10' , '5');
// function add(a,b){
//     console.log(a + b);
// }

/************************************/

// example-2   no argument with return
// function add(a,b,t){
//     t = a+b;
//     return t;
// }
// console.log(add(10,20));

/************************************/

// example -3  anonymous function
// let rev = function(n){
//     let rev = 0;
//     while(n != 0){
//         rev = rev * 10 + n % 10;
//         n = parseInt(n/10);
//     }
//     return rev;
// }
// console.log(rev(12345));  //54321

/************************************/

// example-4 basic function

// num(21);
// function num(a){
//     if (a % 5 == 0) {
//         console.log("No. is Divisible by 5");
//     }
//     else{
//         console.log("No. is not Divisible by 5");
//     }
// }


/************************************/

// example -5 arrow function
 
// let perfect = (a) =>{
//     let n = 0;
//     for(let i = 1; i < a; i++){
//         if(a % i == 0){
//             n = n + i;
//             console.log(i);
//         }
//     }
//     console.log(n);
//     if(a == n){
//         console.log("number is perfact" + n);
//     }else{
//         console.log("number is not perfact" + n);
//     }
// }
// console.log(perfect(496));
// console.log(perfect(8129));

/************************************/

// example - 6
// let newfun = (n) =>{
//     console.log("winding phase :" + n);
//     if(n < 3){
//         newfun(++n);
//     }
//     console.log("unwinding phase:" + n);
// }
// console.log((newfun(2)));

/************************************/

// example - 7
// let fact = (n) =>
// {
//     if(n == 1)
//     {
//         return 1;
//     }
//     else
//     return n * fact(n-1);
// }
// let x = fact(5);
// console.log("factorial is:" + x);

/************************************/

// example - 8
// function fib(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }

// let n = 10;
// for (let i = 1; i <= n; i++) { 
//     console.log(fib(i));
// }

/************************************/

// example-9
// let cube = function (number) {
//     return number * number*number;
//   };  
//   console.log(cube(4));

/************************************/

//   example-10
// function add(a, b) {
//     return a + b;
// }

// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// let result = add(number1,number2);

// console.log("The sum is " + result);

/************************************/

// example-11
// function compare(a, b) {
//     if (a > b) {
//         return 0;
//     } else if (a < b) {
//         return 1;
//     }
//     return 0;
// }
// console.log(compare(30,20));
// console.log(compare(10,20));

/************************************/

// example-12
// const calculateTax = (income) => {
//     let tax, totaltax;

//     if (income <= 2500) {
//         tax = 0;
//         console.log("slab tax-1 is: " + tax);
//     } else if (2500 < income && income <= 5000) {
//         tax = (income - 2500) * 0.10;
//         console.log("slab tax-2 is : " + tax);
//     } else if (5000 < income && income <= 10000) {
//         tax = 500 + (income - 5000) * 0.20;
//         console.log("slab tax-3 is : " + tax);
//     } else {
//         tax = 500 + 1000 + (income - 10000) * 0.30;
//         console.log("slab tax-4 is : " + tax);
//     }

//     totaltax = income - tax;
//     console.log("total tax is : " + totaltax);
// }

// calculateTax(7000);

/*********************************/

// example-13 // 1 4 12 32 80....

// function Mult(x) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i * x);
//         x = x * 2;
//     }
// }
// console.log(Mult(1));

/*********************************/

// example-14
// (function(salary) {
//     let hra, da, gross;
    
//     if (salary <= 5000) {
//         hra = salary * 0.08;
//         da = salary * 0.20;
//     } else if (salary <= 10000) {
//         hra = salary * 0.12;
//         da = salary * 0.30;
//     } else if (salary < 15000) {
//         hra = salary * 0.15;
//         da = salary * 0.40;
//     } else {
//         hra = salary * 0.20;
//         da = salary * 0.50;
//     }
    
//     gross = salary + hra + da;
//     console.log("Gross salary is: " + gross);
// })(15000);

/*********************************/

// example-15
// let product = function(t){
//     for(let i = 0.5; i <= 10; i++)
//     {
//         console.log(i++);
//         console.log(t++);
//         t+=3;
//     }
// }
// console.log(product(1));

/*********************************/

// example-16
//     let x = function(a,b,c){
//         if(a > b && a > c){
//             console.log("largest no. is a");
//         }
//         else{
//             if(b > c){
//                 console.log("larger no. is b");
//             }
//             else{
//                 console.log("large no. is c");
//             }
//         }
//     }
// console.log(x(51,200,340));

/*********************************/

// example-17 
    // let num = (a)=>{
    //     if(a > 0){
    //         console.log("It is positive number");
    //     }
    //     else{
    //         console.log("It is negative number");
    //     }
    // }
    // console.log(num(-10));
    // console.log(num(10));

/*********************************/

// example-18
//     let x = (age)=>{
//     let message;
    
//     if (age >= 16) {
//       message = 'You can drive.';
//     } else {
//       message = 'You cannot drive.';
//     }
    
//     console.log(message); 
// }
// // console.log(x(15));
// console.log(x(20));

/*********************************/

// example-19
// function week(day){
//     let dayName;
//     switch (day) {
//       case 1:
//         dayName = 'Sunday';
//         break;
//       case 2:
//         dayName = 'Monday';
//         break;
//       case 3:
//         dayName = 'Tuesday';
//         break;
//       case 4:
//         dayName = 'Wednesday';
//         break;
//       case 5:
//         dayName = 'Thursday';
//         break;
//       case 6:
//         dayName = 'Friday';
//         break;
//       case 7:
//         dayName = 'Saturday';
//         break;
//       default:
//         dayName = 'Invalid day';
//     }
//     console.log(dayName); 
// }
// console.log(week(3));

/*********************************/

// example-20
// (function() {
//     let a = 30, b = 20, c = 45, d = 40, total, per;
//     total = a + b + c + d;
//     per = total / 4;
//     console.log("Total marks is : " + total);
//     console.log("Percentage is : " + per);

//     if (per >= 95) {
//         console.log("A grade");
//     }
//     else if (per < 95 && per >= 70) {
//         console.log("B grade");
//     }
//     else if (per < 70 && per >= 45) {
//         console.log("C grade");
//     }
//     else if (per < 45 && per >= 35) {
//         console.log("D grade");
//     }
//     else if (per < 35) {
//         console.log("E grade");
//     }
// })();

