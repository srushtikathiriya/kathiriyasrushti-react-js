{
    // const numerator = 100 , denominator = 20;
    // try{
    //     console.log(numerator/denominator);
    //     // let a;
    //     console.log(a);
    //     console.log('Hello');
    // }
    // catch(error){
    //     console.log('An error caught');
    //     console.log('Error message :' + error);
    // }
}

// try...catch...finally
{
    // const numerator = 100,denominator = 20;
    // try{
    //     console.log(numerator/denominator);
    //     console.log(a);
    // }
    // catch(error){
    //     console.log(('An error caught'));
    //     console.log('Error message :' + error);
    // }
    // finally{
    //     console.log('finally will execute every time');
    // }
}

// try...catch...throw
{
    const number = 10;
    try{
        if(number > 50){
            console.log('Success');
        }
        else{
            throw new error('The number is low');
        }
        console.log('Hello');
    }
    catch(error){
        console.log('An error caught');
        console.log('Error message :' + error);
    }
}