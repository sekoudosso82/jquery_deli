
// for (var i = 0 ; i < 3; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("p").style.color = "purple";
//     });
$()
// }

// $("button").click(function(){
//     $("p").css("color", "purple");
// });

// $("button").on("click", function(){
//         $("p").css("color", "purple");
//     });
// $("p").css("color" , "red");

// $("#addCB").on("click", function(){
//     $("#label1").text("ok")
// });


let totalp = 0;

// bugger
let leftA = $("#addLB");
let leftS = $("#subLB");
let leftQ = $("#leftInput") ;
        
        leftA.on("click", () => {
            leftQ.attr("value", parseInt(leftQ.attr("value"))+1);
            totalp += 5;
            $("#h6ID").text("Total : $" +  totalp) ;
        });
        
        leftS.on("click", () => {
            if (parseInt(leftQ.attr("value"))>0) {
                leftQ.attr("value", parseInt(leftQ.attr("value"))-1);
                totalp -= 5;
                $("#h6ID").text("Total : $" +  totalp) ;
            }
        });
// sandwich
let centerA = $("#addCB");
let centerS = $("#subCB");
let centerQ = $("#centerInput") ;

        centerA.on("click", () => {
            centerQ.attr("value", parseInt(centerQ.attr("value"))+1 ) ;
            totalp += 4;
            $("#h6ID").text("Total : $" +  totalp) ;
        });
        centerS.on("click", () => {
            if (parseInt(parseInt(centerQ.attr("value")))>0) {
                centerQ.attr("value", parseInt(centerQ.attr("value"))-1 ) ;
                totalp -= 4;
                $("#h6ID").text("Total : $" +  totalp) ;
            }
        });

// phily-cheese
let rightA = $("#addRB");
let rightS = $("#subRB");
let rightQ = $("#rightInput") ;

        rightA.on("click", () => {
            rightQ.attr("value", parseInt(rightQ.attr("value"))+1);
            totalp += 3;
            $("#h6ID").text("Total : $" +  totalp) ;
       });

        rightS.on("click", () => {
            if (parseInt(rightQ.attr("value"))>0) {
                rightQ.attr("value", parseInt(rightQ.attr("value"))-1);
                totalp -=   3;
                $("#h6ID").text("Total : $" +  totalp) ;
           }
        });

let orderButton = $("#placeOrder");
        orderButton.on("click", () =>{
            leftQ.attr("value", 0);
            centerQ.attr("value",  0);
            rightQ.attr("value", 0);
            totalp = 0;
            $("#h6ID").text("Total : $" +  totalp) ;

            
        });


    