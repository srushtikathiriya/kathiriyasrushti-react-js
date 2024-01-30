//  Javascript Type Conversion 

// let x;
// console.log(x);  //"undefined"
// console.log(typeof(x));  //undefined


// const x;   // SyntaxError: Missing initializer in const declaration 

{
// console.log(x); //ReferenceError:Cannot access 'x' before initialization
// const x = 3;
}

{
// console.log(y);  //ReferenceError:Cannot access 'y' before initialization 
// let y = 3;
}

{

// x = "The answer is " + 42;   
// console.log(x);   //The answer is 42
// console.log(typeof(x));   //string

// y = 42 + " is the answer";  
// console.log(y);    //42 is the answer
// console.log(typeof(y));   //string

// z = "37" + 7 - 10;    
// console.log(z);  //367
// console.log(typeof(z));     //number       

// let x = "37" - 7;
// console.log(x);   //30
// console.log(typeof(x));   //number

// let y = "37" * 7;
// console.log(y);    //259
// console.log(typeof(y));  //number
}

{
    // let x = false;
    
    // let y = (Number(x));
    // let z = (String(x));
    // let a = (Boolean(x));
    // console.log(typeof(y));     //number
    // console.log(typeof(z));    //string
    // console.log(typeof(a));    //boolean
  }
  
  {
    // let x = true;
    
    // console.log(Number(x));   //1
    // console.log(String(x));   //true
    // console.log(Boolean(x));  //true
  }
  
  {
    // let x = 0;
    
    // console.log(Number(x));    //0
    // console.log(String(x));    //0
    // console.log(Boolean(x));    //false
  }
  
  {
    // let x = 1;
    
    // console.log(Number(x));   //1
    // console.log(String(x));   //1
    // console.log(Boolean(x));  //true
  }
  
  {
    // let x = "000";
    
    // console.log(Number(x));   //0
    // console.log(String(x));   //000
    // console.log(Boolean(x));  //true
  }
  
  {
    // let x = "111";
    
    // console.log(Number(x));   //111
    // console.log(String(x));    //111
    // console.log(Boolean(x));     //true
  }
  
  {
    // let x = undefined;
    
    // console.log(Number(x));     //NaN
    // console.log(String(x));     //undefined
    // console.log(Boolean(x));    //false
  }
  
  {
    // let x = NaN;
    
    // console.log(Number(x));   //NaN
    // console.log(String(x));   //NaN
    // console.log(Boolean(x));  //false
  }
  
  {
    // let x = null;
    
    // console.log(Number(x));   //0
    // console.log(String(x));   //null
    // console.log(Boolean(x));  //false
  }
  
  {
    // let x = Infinity;
    
    // console.log(Number(x));    //Infinity
    // console.log(String(x));    //Infinity
    // console.log(Boolean(x));   //true
  }
  
  {
    // let x = -Infinity;
    
    // console.log(Number(x));   //-Infinity
    // console.log(String(x));    //-Infinity
    // console.log(Boolean(x));   //true
  }
  
  {
    // let x = "";
    
    // console.log(Number(x));   //0
    // console.log(String(x));   //
    // console.log(Boolean(x));  //false
  }
  {
    // let x = " ";
    
    // console.log(Number(x));   //0
    // console.log(String(x));   //
    // console.log(Boolean(x));  //true
  }
  {
    // let x = "Hello";
    
    // console.log(Number(x));  //NaN
    // console.log(String(x));  //Hello
    // console.log(Boolean(x)); //true
  }
  
  {
    // let x = [ ];
    
    // console.log(Number(x));   //0
    // console.log(String(x));      //
    // console.log(Boolean(x));     //true
  }
  
  {
    // let x = ["Hello"];
    
    // console.log(Number(x));   //NaN
    // console.log(String(x));      //Hello
    // console.log(Boolean(x));     //true
  }
  
  {
    // let x = [10, 50 , 30];
    
    // console.log(Number(x));   //NaN
    // console.log(String(x));   //10,50,30
    // console.log(Boolean(x));  //true
  }
  
  {
    // let x = [100];
    
    // console.log(Number(x));  //100
    // console.log(String(x));  //100
    // console.log(Boolean(x)); //true
  }
  
  {
    // let x = ["Hello" , "Hi"];
    
    // console.log(Number(x));   //NaN
    // console.log(String(x));   //Hello,Hi
    // console.log(Boolean(x));  //true
  }
  
  {
  
    // let z = {
    //   x : "hello",
    //   y: function x(){
    //     return 10
    //   },
    // }
    
    // console.log(y);
    // console.log(z.y());
    // console.log(String(x));
    // console.log(Boolean(x));
  }
  
  {
    // let x = {};
    
    // console.log(Number(x));   //NaN
    // console.log(String(x));   //[object object]
    // console.log(Boolean(x));  //true
  }