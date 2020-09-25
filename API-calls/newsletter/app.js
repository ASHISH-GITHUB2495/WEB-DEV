const express = require("express"); //external package
const request = require("request"); //external package
const bodyParser = require("body-parser"); //external package
const https = require("https"); // native package\\
 
const app = express();


app.use(bodyParser.urlencoded({ extended: true })); // a body parser external package for retriving information requested by broser


app.use(express.static("public"));
///for loading static pages css and images folder this is native function of express
// public helps to locate the static files



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});


app.post("/", function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.eMail;

    const data ={
    	members: [
    	{
                email_address: email,
                status : "subscribed",
                merge_fields: {
                	FNAME: firstName,
                	LNAME: lastName
                }
    	}

    	]

    };
    const jsonData = JSON.stringify(data);
    const url = "https://us2.api.mailchimp.com/3.0/lists/e03e5b9916";
    const options = {
    	method: "POST",
    	auth: "ashish:af1549858f5d534d4fbd8ad1fba9da9c6-us2"

    }

   const request = https.request(url,options,function(response){
    	 
    	 if(response.statusCode==200)
    	 {
    	 	 res.sendFile(__dirname+"/success.html");
    	 }
    	 else
    	 {
    	 	res.sendFile(__dirname+"/failure.html");
    	 }



    

    })

   request.write(jsonData);
   request.end();
   
  

});




app.listen(process.env.PORT || 3000, function() {

    console.log("server has started on port 3000");

});




//f1549858f5d534d4fbd8ad1fba9da9c6-us2

//e03e5b9916