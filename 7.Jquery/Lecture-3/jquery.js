// jQuery Effects - Animation

// $(selector).animate({params},speed,callback);
// css("backgound-color", "red")
// css("backgound-color": "red" , "font-size" :"30px")

// $(function(){
//     $("#demo").click(function(){
//         $("#animate").animate({
//             left:"600px",
//             fontSize:"30px",
//         },3000,function(){
//             $("#animate").css({
//                 "background-color" : "blue",
//                 "color":"red"
//             })
//         })
//     })
// })

/*********************************************************************************/

// JQuery stop() effect

// $(function(){
//     $("#demo").click(function(){
//         $("#slide").slideDown(3000)
// $("#slide").slideUp(2000)
//     $("#slide").fadeIn()
//     $("#slide").fadeOut()
//     })
// })

// $(function(){
//     $("#stop").click(function(){
//         $("#slide").stop()
//     })
// })

/*********************************************************************************/

/* jQuery Html */

/*
get
set
addClass
removeClass
after 
before
append
prepend
*/


// Get Method

// text(),html(),val()

// $(function(){
//     $("#btn").click(function(){
//         alert($(".para").text())
//     })
// })


// $(function(){
//     $("#btn").click(function(){
//         alert($(".para").html())
//     })
// })


// $(function(){
//     $("#btn").click(function(){
//         alert($("#inputs").val())
//     })
// })

// $(function(){
//       $("#btn").click(function(){
//         $(".para").html("<b>JQUERY</b>")
//       })
// })

$(function(){
      $("#btn").click(function(){
        alert($("#inputs").val())
      })
    })