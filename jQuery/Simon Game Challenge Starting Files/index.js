
 var level;
   var arr=[];
   var user=[];

   var status=0;


$(document).keypress(function(event){
  if(status==0)
	  startGame();
});

function startGame()
{
    level=0;
    arr=[];
    user=[];
    status=1;
   game();
}

$(".btn").click(function(event){
   var bun=$(this).attr("id");

  user.push(Number(bun));
   var audio=new Audio("sounds/"+bun+".mp3");
        audio.play();


      for(var i=0;i<user.length;i++)
         if(user[i]!==arr[i])
              { var audio=new Audio("sounds/wrong.mp3");
                audio.play();
                over();
              }

    if(user.length==arr.length)
        game();
     



});


function over()
{

      $("h1").text("GAME OVER!!! Press Any Key To Start Game");
      $("body").css("background-color","red");
     setTimeout(function(){  
     
     $("body").css("background-color","#011F3F");
     },100);



    
      status=0;

}


function game()
{
	
 
     	level++;
      $("h1").text("level "+level);

      var bun=(Math.floor(Math.random()*4));
    	arr.push(bun)
        $(".button"+bun).fadeOut(100).fadeIn(100);

        var audio=new Audio("sounds/"+bun+".mp3");
        audio.play();

       
       user=[];
    	
    
    
}

















// function matchSequence(arr,level)
// {
  
// var arr2=[];


//   $(".btn").click(function(event){
//      console.log($(this).attr("id"));
//      arr2.push(Number($(this).attr("id")));
//      if(arr2.length==level)
//      { 
//        console.log(arr);
//        console.log(arr2);

//        for(var i=0;i<level;i++)
//           if(arr[i]!=arr2[i])
//              return false;

//          return true;

//       }
//   });


// }

// function restart()
// {
//   console.log("welcome to restart");
// }*/