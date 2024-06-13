// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

// var reverse = function(x) {
//     let rev = 0;
//     while (x !== 0) {
//         rev = rev * 10 + x % 10;
//         x = parseInt(x / 10);
//     }
//     return rev;
// };
// console.log(reverse(15438));


// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function txt(str){
//     return str.split('').sort().join('');
// }
// console.log(txt('webmaster'));


// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// function txt(x){
//     let array = x.split(' ');
//     let newarray = [];
//     for(i = 0; i < array.length;i++){
//         newarray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
//     }
//     return newarray.join(' ');
// }
// console.log(txt('the quick brown fox'));


// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

{
    // function longestword(string) {
    //     let words = string.split(' ');
    //     let longword = '';
    //     for (let x = 0; x < words.length; x++) {
    //         if (words[x].length > longword.length) {
    //             longword = words[x];
    //         }
    //     }
    //     return longword;
    // }
    // console.log(longestword('Web Development Tutorial'));
}


//5. Write a JavaScript function that checks whether a number is perfect.

// let perfect = (a) =>{
//         let n = 0;
//         for(let i = 1; i < a; i++){
//             if(a % i == 0){
//                 n = n + i;
//                 console.log(i);
//             }
//         }
//         console.log(n);
//         if(a == n){
//             console.log("number is perfact");
//         }else{
//             console.log("number is not perfact");
//         }
//     }
// perfect(496);
// perfect(8129);