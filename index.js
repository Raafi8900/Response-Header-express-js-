var express = require('express');
var app = express();

//Home
app.get("/", function (req, res) {
    res.send("Hello Express js"); // Send the response directly
});

//about
app.post("/about", function (req, res) {
   res.send("About Page"); // Send the response directly
  //res.json({message:"About Page"})
});

//Contact 
app.put("/contact", function (req, res) {
    res.send("Contact Page"); // Send the response directly
});

//Terms
app.delete("/terms", function (req, res) {
    res.send("Term page"); // Send the response directly
});


app.get("/header",function(req,res){
    res.append("name","Raafi");
    res.append("city","Chattagram");
    res.append("age","30 years");

    res.status(201).end("Hello World");
})

app.listen(7000, function () {
    console.log("Server running successfully on port 7000");
});
