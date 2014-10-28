//set an empty variable called selectedsq that can hold multiple values
var selectedsq = [];
var buttonid;
var controlid;

$(".box").click(function (){
    console.log(this);  //which class=box element did you click on?
    selectedsq.push(this);  //add clicked element to array
    console.log(selectedsq);
    $(selectedsq).css("border-color","aqua").css("color","aqua");  //indicate selection through aqua color
})

$("button").click(function()  //when a button is clicked
{
    // console.log(this);  //what did you click on?
    buttonid=$(this).attr("id"); //get the ID value of the element you clicked on
    console.log(buttonid);  //print value of buttonid

    if($(this).attr("id") === "unselect"){  //if the unselect button is clicked
        $("li[class=box]").css("border-color", "white").css("color","white");//select all <div> with class "box", change border to black
        //$(selectedsq).css("border-color", "black");
        selectedsq = [];  //reset variable holding selectedsq
    };

    $(selectedsq).css("background-color", buttonid);   //change the color of the sq based on value of button id
});