
 const express = require('express');

 const app=express();

 app.get("/",function(request,response){

 	//console.log(request);
 	response.send("<h1> Hellow world! </h1>");

 });

 app.listen(3000,function(){
    console.log("Server has started on port 3000");
 });

 app.get("/contact",function(req,res){
 	res.send("Contact me at : ashishyadav2495@gmail.com");

 });

 app.get("/about",function(req,res){

 	res.send("My name is ashish ..you can call me ashu");

 });
 
 app.get("/hobbies",function(req,res){

 	res.send("sorry buddy no hobbies :(");

 });