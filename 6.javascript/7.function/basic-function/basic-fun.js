// function  -> perform to specific task

// hosting
// square('10','5');     // function call

// defination
// function square(a,b){
    // console.log(a*b);
// }


// basic function
// function add(a,b){
//     return a + b;
// }
// // console.log(add(5,15));
// let x = add(10,15);
// console.log(x);


// anonymous function / function as expression
// let product = function(x , y){
//     return x * y;
// }
// console.log(product(11,2));


//IIFE

// (function hello()
// {
//     console.log("Hello world");
// })();

// let x = (function hello(a,b)
// {
//     return (a - b);
// })("10" , 15);
// console.log(x);


// arrow function
// function add(a ,b)
// {
//     return a + b;
// }
// console.log(add(11,5));

// let add = (a , b) =>{
//     return a + b;
// }
// console.log(add(11,5));

// let add = (a,b) =>a + b
// console.log(add(11 , 5));

// function constructer
// let let hello = new Function("a" , "b" ,"return a * b");
// console.log(hello(12 , 10));


// Function are Object:-
// function hello(a,b,c){
//     return arguments.length;
// }
// console.log(hello(1,2,3));
// console.log(hello(1,2,3).toString());


// Function Rest Parameters:-

// function add(...args) {
//     let sum = 0;
// for (let i=0; i<args.length;i++) 
//                 sum = sum + args[i];
//     return sum;
// };
// console.log(add(1,2,3,4,5));

// Arguments Object:-

// function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// };
// console.log(add(1, 123, 500, 115, 44, 88));   // 871


// Generator Function:-
// function* generate() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }

// let generator = generate();
// console.log(generator.next().value); // 1
// console.log(generator.next().value); // 2
// console.log(generator.next().value); // 3
// console.log(generator.next().value); // 4


// this Keyword:-

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    hello: function() {
        let data = this.firstName + this.lastName;
        return data;
                    // return this.firstName + " " + this.lastName;
        }
};   // John Doe
console.log(person.hello());
		