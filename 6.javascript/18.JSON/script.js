{
    // const data = {
    //     "name" : "John",
    //     "age" : 22,
    //     "hobby" : {
    //         "reading" : true,
    //         "gaming" : false,
    //         "sport" : "football"
    //     },
    //     "class" : ["Javascript","Html","CSS"]
    // }
    // console.log(data.name);
    // console.log(data.hobby.sport);
    // console.log((data.class));
    // console.log(data.class[2]);
}

// convert JSON data to a Javascript
{
    // const jsonData = '{"name":"John","age":22}'
    // console.log(jsonData);

    // // converting to javascript object
    // const obj = JSON.parse(jsonData);

    // console.log(obj);
    // console.log(obj.age);
}

// convert Javascript data to a JSON
{
    const jsonData = {name:"John",age:22}
    console.log(jsonData);

    // converting to json object
    const obj = JSON.stringify(jsonData);

    console.log(obj);
}
