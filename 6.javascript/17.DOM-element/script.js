// function message(){
//     // confirm("yes,I Am Heading Tag");
//     alert('Yes,I AM Heading Tag');
// }

// function dateshow(){
//     document.getElementById("date").innerHTML=Date();
// }

// function uppercase(){
//     const change = document.getElementById("emails");
//     change.value = change.value.toUpperCase();
// }

// function red(one){
//     one.style.color='red';
// }

{
    // function Down(obj){
    //     obj.style.backgroundColor="#1ec5e5";
    //     obj.innerHTML="Release Me";
    // }
    // function up(obj){
    //     obj.style.backgroundColor="#D94A38";
    //     obj.innerHTML="Thank You";
    // }
}

// JavaScript addEventListener():-

{
    const x = document.getElementById('clickIt');
    const y = document.getElementById('hoverpara');

    x.addEventListener("click",Respondclick);
    y.addEventListener("mouseover",RespondMouseover);
    y.addEventListener("mouseout",RespondMouseout);

    function RespondMouseover(){
        document.getElementById("effect").innerHTML+='Mouseover Event' + "<br>";
    }        

    function RespondMouseout(){
        document.getElementById("effect").innerHTML+='Mouseout Event' + "<br>";
    }

    function Respondclick(){
        document.getElementById("effect").innerHTML+='click Event' + "<br>";
    }
}