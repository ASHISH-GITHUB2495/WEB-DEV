const express = require ('express');
const app= express();

app.listen(3000,function(){
	console.log("server has starte on 3000 ");
})


app.get("/",function(req,res){

	res.sendFile(__dirname+"/index.html");

});



const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post("/",function(req,res){
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);
   var sum=num1+num2;
   res.send("your sum is "+sum );
});

app.get("/bmiCalculator",function(req,res)
{  console.log("Welcome to bmi bmiCalculator");
   res.sendFile(__dirname+"/bmiCalculator.html");
});


app.post("/bmiCalculator",function(req,res){
   var weight=Number(req.body.weight);
   var height=Number(req.body.height);
   var sum=weight/(height*height);
   res.send("your body mass index is "+sum);
});