 var num=document.querySelectorAll(".drum").length;

for(var i=0; i<num;i++)
{ 
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		
	  makeSound(this.innerHTML);
	  buttonAnimate(this.innerHTML);
		
	});
}

document.addEventListener("keypress",function(){

	makeSound(event.key);
	buttonAnimate(event.key);
		

});


function makeSound(ch)
{
	if(ch=='w'||ch=='W')
		{
			var audio=new Audio('sounds/tom-1.mp3');
			audio.play();
		}
		else if(ch =='a'||ch=='A')
			{
			var audio=new Audio('sounds/tom-2.mp3');
			audio.play();
		}

		else if(ch=='s'||ch=='S')
			{
			var audio=new Audio('sounds/tom-3.mp3');
			audio.play();
		}

	    else if(ch=='d'||ch=='D')
	    	{
			var audio=new Audio('sounds/tom-4.mp3');
			audio.play();
		}

	    else if(ch=='j'||ch=='J')
	    	{
			var audio=new Audio('sounds/snare.mp3');
			audio.play();
		}

	    else if(ch=='k'||ch=='K')
	    	{
			var audio=new Audio('sounds/crash.mp3');
			audio.play();
		}

	    else if(ch=='l'||ch=='L')
	    	{
			var audio=new Audio('sounds/kick-bass.mp3');
			audio.play();
		}

}

function buttonAnimate(currKey)
{
  var active= document.querySelector("."+currKey);
active.classList.add("pressed");


setTimeout(function(){
	active.classList.remove("pressed");

},100);

}