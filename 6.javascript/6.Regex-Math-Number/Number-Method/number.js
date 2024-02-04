// tostring():-

// let number = 155
// console.log((number));        //155
// console.log(typeof(number));  //number

// let number1 = number.tostring();
// console.log(number1);
// console.log(typeof(number1));

// let number2 = (155 + 89).toString();
// console.log(number2);           //244 
// console.log(typeof(number2));   //string

// let number3 = (155.25).toString();
// console.log(number3);               //155.25
// console.log(typeof(number3));       //string


/***********************************************/


// toExponential():-

// let Enumber = 120000;
// console.log(Enumber);       //120000

// let Enumber1 = Enumber.toExponential();
// console.log(Enumber1);      //1.2e+5

// let Enumber2 = Enumber.toExponential(3);
// console.log(Enumber2);      //1.200e+5


/***********************************************/


//tofixed():-

// let Fnumber = 1255.2344
// console.log(Fnumber);                   //1255.2344

// let Fnumber1 = Fnumber.toFixed();
// console.log(Fnumber1);                  //1255
// console.log(typeof(Fnumber1));          //string

// let Fnumber2 = Fnumber.toFixed(5);
// console.log(Fnumber2);                  //1255.23440
// console.log(typeof(Fnumber2));          //string

// let Fnumber3 = Number(Fnumber2);
// console.log(Fnumber3);                  //1255.2344
// console.log(typeof(Fnumber3));          //number


/***********************************************/


// toPrecision()pre

// let Pnumber = 1.56589
// console.log(Pnumber);                     // 1.56589

// let Pnumber1 = Pnumber.toPrecision(4);
// console.log(Pnumber1);                    //1.566
// console.log(typeof(Pnumber1));           //string


/***********************************************/


//Valueof():-

// let Vnumber = 1564567
// console.log(Vnumber);       //1564567

// let Vnumber1 = Vnumber.valueOf();
// console.log(Vnumber1);      //1564567

// let Vnumber2 = (12-5).valueOf();
// console.log(Vnumber2);       //7

// let Vnumber3 = (12).valueOf();
// console.log(Vnumber3);      //12