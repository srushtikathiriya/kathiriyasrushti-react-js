// object destrcturing
// let person = {
//     firstname : "John",
//     lastname : "Peter",
//     email : "john@test.in",
// }
// let {firstname} = person;
// console.log(firstname);

// for in loop => array,object
/*
    for(let key in object){
        statements.......
    }
 */

// let arr = ['hello', 'wolrd', 'john', 'peter'];
// for(let ele in arr){
    // console.log((ele + " => " + arr[ele]));
// }

// let person = {
    //         firstname : "John",
    //         lastname : "Peter",
    //         email : "john@test.in",
    // }
    // for(let key in person){
        //     console.log(key + " => " + person[key]);
        // }
        // for of loop => array
// let arr = ['hello','wolrd','john','peter'];
// for(let ele of arr){
//     console.log(ele);
// }

// Spread operator:-

// let person = {
//         firstname : "John",
//         lastname : "Peter",
//         email : "john@test.in",
// }
//     let obj1 = {...person};    //copy
//     person.gender = 'Male';
//     console.log(person);
//     console.log(obj1);

let arr = ['hello','wolrd','john','peter'];
let arr1 = [...arr];
arr1.push(111);
console.log(arr);
console.log(arr1);