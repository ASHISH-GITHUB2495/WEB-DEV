console.log($("h1").css("font-size","5rem"));
$("button").text("dont click me");
$("button").html("<em>Hey</em>");
 
$("a").attr("href","https://www.yahoo.com");

$("h1").click(blue);

function blue(){
   $("h1").css("color","blue");
}

$("button").click(function(){
      $("h1").slideUp().slideDown().animate({opacity: 0.5});

});

$(document).keypress(function(event){
     $("h1").text(event.key);
})

$(document).on("mouseover",function(event){
	var x=event.clientX;
	var y=event.clientY;
   	$("h1").text(x+" "+y);



});