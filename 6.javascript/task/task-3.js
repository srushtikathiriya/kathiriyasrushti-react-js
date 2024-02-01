// while / do-while / for Program

// que-1
{
    // let i = 50;
    // while (i > 0) {
    //     document.write(i + "<br>");
    //     i--;
    // }

    // for (let i = 50; i > 0; i--) {
    //     document.write(i + "<br>");              
    // }

    // let i = 50;
    // do{
    //     document.write(i + "<br>");
    //     i--;
    // }while(i > 0)
}

// que-2
{
    //    let i = 1; 
    //    let sum = 0; 

        // while ( i <= 10 )
        // {
        //     document.write("Number is:" + i + "<br>")
        //     sum += i;
        //     i++
        // }
        // document.write("Number of sum is:" + sum + "<br>") 

    // let sum = 0;
    // for(let i = 1; i <= 10; i++){
    //     document.write("Number is:" + i + "<br>")
    //     sum += i;
    // }
    // document.write("Number of sum is:" + sum + "<br>")

    // let i = 1; 
    // let sum = 0; 
    //     do
    //     {
    //        document.write("Number is:" + i + "<br>")
    //        sum += i;
    //        i++
    //     }while ( i <= 10 )
    //     document.write("Number of sum is:" + sum + "<br>") 
}

// que-3
{
    // link : for(let i = 1; i <= 10; i++)
    // {
    //     document.write("<br>")
    //     for(let j = 1; j <=10; j++)
    //     {
    //         if(i == 11){
    //             break link;
    //         }
    //         document.write(i + "*" + j + "=" +  i * j  + "<br>");
    //     }
    // }

    // let i = 1; 
    // let  x= 13;
    // do{
    //     document.write(x + "*" + i + "=" +  x * i  + "<br>")
    //     i++;
    // }while ( i <= 10 )

}

// que-4
{
    // const number = 3;
    // let x = 0 , num = prompt("Guess the number game \n we give you a 10 chance : ");  
    // while(x<9)
    // {
    //     x++;
    //     if(num == number )
    //     {
    //         document.write( "<hr>" +"Right number is you win : " + number);
    //         break;
    //     }
    //         document.write(x + ". " +"your chosen number is : " + num + "<br>");
    //         num = prompt("Guess the number game \n we give you a 10 chance : ");  
    // }


    
        //   let randomNumber = 20;
        //   let guessCount = 0;
        //   let guess = 10;
        
        //   while (guessCount < guess) {
        //     let userGuess = prompt("Enter a number between 1 and 100");
        //     guessCount++;
        
        //     if (userGuess == randomNumber) {
        //       alert(
        //         "Congratulations! You guessed the number in " + guessCount + " tries."
        //       );
        //       break;
        //     }
        
        //     if (userGuess > randomNumber) {
        //       alert("Your guess is too high. Try again.");
        //     } else if (userGuess < randomNumber) {
        //       alert("Your guess is too low. Try again.");
        //     }
        
        //     if (guessCount == guess) {
        //       alert(
        //         "Sorry, you have exceeded the guess limit. The number was " +
        //           randomNumber +
        //           "."
        //       );
        //     }
        //   }
        

}

// que-5
{
    // let a = 1;
    // let b = 0;
    // let c;
    // let i=1; 
    // while (i <= 10) {
    //     c = a + b;
    //     a = b;
    //     b = c;
    //     i++;
    //     document.write(a + "<br>");
    // }

    // let a = 1;
    // let b = 0;
    // let c;
    // for(let i = 1; i <= 10; i++){
    //     c = a + b;
    //     a = b;
    //     b = c;
    //     document.write(a + "<br>");
    // }

    // let a = 1;
    // let b = 0;
    // let c;
    // let i = 1; 
    //  do{
    //     c = a + b;
    //     a = b;
    //     b = c;
    //     i++;
    //     document.write(a + "<br>");
    // }while (i <= 10)
}

// que-6
{
    // let i = 1;
    // let a = 1;
    // while (i <= 10) {
    //     a *= i;
    //     i++;
    //     document.write(a + "<br>");
    // }

    // let a = 1;
    // for(let i = 1; i <= 10; i++){
    //     a *= i;
    //     document.write(a + "<br>");
    // }

    // let i = 1;
    // let a = 1;
    // do{
    //     a *= i;
    //     i++;
    //     document.write(a + "<br>");
    // } while (i <= 10)
}

// que-7
{

}

// que-8
{
    // let a = 1;
    // let b = 4;
    // while (a<=10) {
    //     result = a ** b;
    //     a++;
    //     document.write(result + "<br>" );
    // }

    // let a = 1;
    // let b = 4;
    // for(a = 1; a <= 10; a++){
    //     result = a ** b;
    //     document.write(result + "<br>" );
    // }


    // let a = 1;
    // let b = 4;
    // do{
    //     result = a ** b;
    //     a++;
    //     document.write(result + "<br>");
    // }while (a<=10)
}

// que-9
{

    // let i=1;
    // let  j;

    // while(i<=5)
    // {
    //     j=1;
    //     while(j<=i)
    //     {
    //         document.write("*");
    //         j++;
    //     }
    //     i++;
    //     document.write("<br>");
    // }

    // for(let i=1;i<=5;i++)
    // {
    //     for(let j=1;j<=i;j++)
    // {
    //     document.write("*");
    // }
    //     document.write("<br>");
    // }
}


// break statement

// que-10
{
    // let x = 0 , num = prompt("enter Search number between 1 to 20 : "); 

    // while(x<20){
    //     x++;
    //     if(x == num)
    //     {
            
    //         document.write("your number is :" + x + "<br>");
    //         break;
    //     }
    //     document.write(" your number is Search...." + x +"<br>");
    // }
}

// que-11

{
    // let i = prompt("Enter a starting number value : " ) , num = prompt("enter a ending number value : " );  

    // while(i<=num)
    // {
    //     i++;
    //     if(1 == i%2)
    //     {
    //         document.write(" the first odd number is " + i );
    //         break ;
    //     }
    //     // document.write(i);
    // }

}

// que-12
{
    // const number = parseInt(prompt("Enter a positive number: "));
    // let isPrime = true;

    // for (let i = 2; i < number; i++) {
    //     if (number % i == 0) {
    //         isPrime = false;
    //         break;
    //     }
    // }

    // if (isPrime) {
    //     document.write(`${number} is a prime number`);
    // } else {
    //     document.write(`${number} is a not prime number`);
    // }

}


// que-13
{
    // let i  ;
    // let num = prompt("Enter only single digit number : ");

    // let sum =num*10;

    // for(i=0;i<sum;i++)
    // {
    //     if(num < 10)
    //     {
    //         num = prompt("enter only single digit number number " );
    //         document.write("loop is continue " + num + "<br>");
    //     }else
    //     {
    //         document.write( "<br>" + "loop is break you enter double digit number " + num);
    //         break;
    //     }
    // }
}



// continue statement
// que-14
{
    // let i;
    // for (i = 1; i <= 10; i++) {

    //     if (i % 2 !== 0) {
    //       continue;
    //     }
    //     document.write(i);
    //   }

}

// que-15
{
    // let i = 1;

    // while (i <= 30) {
    //   if (i % 3 === 0) {

    //     i++;
    //     continue;
    //   }
    //   document.write(i + "<br>");
    //   i++;
    // }
}

// que-16
{
    // let i;
    // for (i = 1; i <= 20; i++) {
    //     if (i % 2 !== 0) {
    //     continue;
    // }
    // document.write(i);
    // }
}

// que-17
{
    // let i = 1;
    // do {     
    //     if (i % 5 === 0) {
    //       i++;
    //       continue;
    //     }
    //    document.write(i + "<br>");
    //     i++;
    //   } while (i <= 20);  
}




