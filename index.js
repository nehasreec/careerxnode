import express from "express";
import cors from "cors";
var app = express();
app.use(cors());
app.listen(8080 , ()=>{
    console.log("server started on port 8080");
});

app.get("/" , (req , res)=>{
    res.send("GET request for / hello");
});

app.get("/users" , (req , res) =>{
    res.send("Got a Get request for /users");
});

app.get("/products" , (req , res)=>{
    res.json([
        {name:"product 1" , price :100},
        {name:"product 2" , price :120},
        {name:"product 3" , price :100},
        {name:"product 4" , price :120},
    ]);
});