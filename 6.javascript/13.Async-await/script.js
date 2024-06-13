{
    // // async function example
    // async function f(){
    //     console.log('Async function.');
    //     return Promise.resolve(1);
    // }
    // f().then((data)=>console.log(data));
}

{
    // async function f(){
    //     console.log('Async function.');
    //     return Promise.resolve("skillqode");
    // }
    // f().then(function(result){
    //     console.log(result);
    // });
}

{
    // // a promise
    // let Promise1 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         resolve('Promise resolved')},4000)
    // });
    // // async function
    // async function asyncfun(){
    //     // wait until the Promise resolves
    //     let result = await Promise1;
    //     console.log(result);
    //     console.log('hello');
    // }
    // // calling the async function
    // asyncfun();
}

{
    let Promise1 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Promise1 resolved')},2000);
    });
    let Promise2 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Promise2 resolved')},3000);
    });
    let Promise3 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Promise3 resolved')},4000);
    });

    async function asyncfun(){
        let result1 = await Promise1;
        console.log(result1);

        let result2 = await Promise2;
        console.log(result2);

        let result3 = await Promise3;
        console.log(result3);
    }
    asyncfun();
}