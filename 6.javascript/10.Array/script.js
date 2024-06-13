// const arr = [1,2,3,4,'skill',true,false];
// console.log(arr);
// console.log(arr[5]);
// console.log(arr.length);

// Array Methods:-

// push methos:-
// const data = [11,22,33,44,55];
// data.push(66);
// data.push(77,88,99,100);
// console.log(data);

// pop methos:-
// const data = [11,22,33,44,55];
// data.pop();
// console.log(data);

//unshift:-
// const data = [11,22,33,44,55];
// data.unshift(110);    //unshift  add first element
// data.unshift(220,330);
// console.log(data);

// shift:-
// const data = [11,22,33,44,55];
// console.log(data);      //shift remove first element
// data.shift();
// console.log(data);

// concat:-
// const data = [11,22,33,44,55];
// let arr = ['Skill','Qude'];
// console.log(data.concat(arr));
// console.log(data.concat([99,88,77,66],['Hello','World'],arr));

// reverse:-
// const data = [11,22,33,44,55];
// console.log(data.reverse());


// sort method:-
// let txt = [88,66,11,33,44,22,55,99];
// console.log(txt.sort());

// let txt = [88,266,11,313,44,22,255,99];
// console.log(txt.sort((a,b)=>a-b));

// let txt = ['world','qodde','skill',"hello"];
// console.log(txt.sort());


// Max method:-
// let txt = [88,266,11,313,44,22,255,99];
// console.log(Math.max.apply(null,txt));

// Min method:-
// let txt = [88,266,11,313,44,22,255,99];
// console.log(Math.min.apply(null,txt));

// Slice Method:-
// let txt = [88,266,11,313,44,22,255,99];
// a = txt.slice(2,5);
// console.log(a);

// console.log(txt.slice(2,5));

// splice method:-
// let txt = [88,266,11,313,44,22,255,99];
// txt.splice(2,5);
// console.log(txt);



// let txt = [88,266,11,313,44,22,255,99];
// txt.splice(2,3,"hello","world");
// console.log(txt);


// high order method:-

// // every method:-
// let txt = [88,266,11,313,44,22,255,99];
// let data = txt.every((val,index) => {
//     return (val > 10);
// })
// console.log(data);


// some method:-
// let txt = [88,266,11,313,44,22,255,99];
// let data = txt.some((val,index) => {
//     return (val > 10);
// })
// console.log(data);

// filter method:-
// let txt = [88,266,11,313,44,22,255,99];
// let data = txt.filter((val,index) => {
//     return (val > 50);
// })
// console.log(data);


// find method:-
// let txt = [88,266,11,313,44,22,255,99];
// let data = txt.find((val,index) => {
//     // return (val > 100);
//     // return val > 10;
// })
// console.log(data);


// findIndex method:-
// let txt = [88,266,11,313,44,22,255,99];
// let data = txt.findIndex((val,index) => {
//     // return (val > 100);
//     return(val > 10 && val <= 100)
// })
// console.log(data);


// map method:-
// let txt = [88,266,11,313,44,22,255,99];
// let data = txt.map((val,index) => {
//     // return (val > 50);
//     // return val - 1;
// })
// console.log(data);

// forEach method:-
// let txt = "";
// let data = [88,266,11,313,44,22,255,99];
// let result = data.forEach((val,index) => {
//     txt = txt + val + " ";
// })
// console.log(txt);


// reduce method:-
// let txt = [88,266,11,313,44,22,255,99];
// let data = txt.reduce((total,val) => {
//     return total + val;
// })
// console.log(data);


// reduceRight method:-
// let txt = [88,266,11,313,44,22,255,99];
// let data = txt.reduceRight((total,val) => {
//     return total + val;
// })
// console.log(data);


// Entries method:-
// let data = [88,266,11,313,44,22,255,99];
// let a = data.entries();
// console.log(a.next().value);
// console.log(a.next().value);


// include method:-
// let data = [88,266,11,313,44,22,255,99];
// console.log(data.includes(88));


// copyWithin:-
let data = [88,266,11,313,44,22,255,99];
// let result = data.copyWithin(3,0,2);
let result = data.copyWithin(3,0);
console.log(result);