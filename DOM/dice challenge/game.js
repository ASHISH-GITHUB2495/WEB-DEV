var num1=Math.floor(Math.random()*6+1);
var num2=Math.floor(Math.random()*6+1);
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+num1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+num2+".png");

var num1=document.getElementsByClassName("img1")[0].getAttribute("src");
var num2=document.getElementsByClassName("img2")[0].getAttribute("src");
num1=num1.slice(11,12);
num2=num2.slice(11,12);

if(num1>num2)
document.querySelector("h1").innerHTML=("Player 1 wins");
else if(num1<num2)
 document.querySelector("h1").innerHTML=("Player 2 wins");