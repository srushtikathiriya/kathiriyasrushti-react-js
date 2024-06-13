// document Object model in javascript

// selecting Element

// getelemntbyid()-select an element by ID. 
// getelementsbytagname()-select elements by a tag name 
// grtelementsbyclassname()- select element by one or more class 
// Queryselector()- select element by css selector 

// javascript getelementbyid():-

// function findelement() {
//     const element = document.getElementById("id1");
//     Element.innerhtml = "element found..............";
//     element.style.color = "red";
//     document.getElementById("id2").innerHTML = "hello world";
// }

// const node1 = document.getElementById("id2");
// const node2 = document.getElementById("id3");

// function textnode1() {
//     alert(node1.innerHTML);
// }
// function textnode2() {
//     alert(node2.innerHTML);
// }

// getelementbytagname():-

// const element = document.getElementsByTagName("div");
// console.log(element);

// function changecolor(){
//     for( let i =0; i < element.length;i++){
//         if(i==3){
//             element[i].style.color = "red";
//             element[i].style.border = "1px solid grren";
//         }
//         else
//         element[i].style.color = "blue";
//     }
// }

// getElementbyclassname (bhul che )

//  const element = document.getElementsByTagName("red");
//  console.log(element);

//  function changecolor(){
//     for( let i = 0; i < element.length ; i++) {
//         if (i==2) continue ;
//         element[i].style.color="blue";
//     }
//  }


// Queryselector()

// const element = document.querySelector(".demo");
// console.log(element);

// function changecolor(){
//     element.style.color = "red";
// }



// QueryselectorAll()


// const element = document.querySelectorAll("#sun p");
// console.log(element)

// function changecolor(){
//     for( let i = 0; i < element.length; i++){
//         element[i].style.color = "red"
//     }
// }