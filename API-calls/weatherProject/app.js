const express= require("express"); //external module
const https = require("https"); //native module
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));




app.get("/",function(req,res){

	res.sendFile(__dirname+"/index.html");

});

app.post("/index.html",function(req,res)
	{
      
       const city=req.body.cityName;
       console.log(city);
        const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9b87c818e06372c17e8220f40bad62d7";
      
         https.get(url,function(response){
         	console.log("Data requested...\n");

          response.on("data",function(d){

          	const weatherData= JSON.parse(d);

          	const weatherDescription = weatherData.weather[0].description;
 
            const weatherTemp = weatherData.main.temp;
            const weatherIcon = weatherData.weather[0].icon;

            const iconUrl="http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png";
        

            res.write("<h1>"+weatherDescription+"</h1>");


            res.write("<h2>"+weatherTemp+"</h2>");
            res.write("<img src="+iconUrl+">");
           res.send();



          })

         })




	});







app.listen(3000,function(){
	console.log("Server is runing on port 3000");
});
