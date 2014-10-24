//set an empty variable called selected
var selectedsq;
var appcolor;

$(".box").click(function (){
    selectedsq=this;
//    console.log(selectedsq);
    $(this).css("border-color","aqua");
})



// this is currently hard coded with separate if statements for every button
// this code is easy to follow but not efficient
$("button").click(function(){
    appcolor=this;
    if ( $(appcolor).attr("id") === "red" ) 
    {
        $(selectedsq).css("background-color","red");
    };
    
    if ( $(appcolor).attr("id") === "blue" ) 
    {
        $(selectedsq).css("background-color","blue");
    };

    if ( $(appcolor).attr("id") === "orange" ) 
    {
        $(selectedsq).css("background-color","orange");
    };
    
    if ( $(appcolor).attr("id") === "yellow" ) 
    {
        $(selectedsq).css("background-color","yellow");
    };    
    
    if ( $(appcolor).attr("id") === "green" ) 
    {
        $(selectedsq).css("background-color","green");
    };       

    $(selectedsq).css("border-color","black");

    
});
