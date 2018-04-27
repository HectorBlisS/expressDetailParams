const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Restaurant = require("./models/Restaurant");

//config
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/foodPlaces");

app.get("/", (req,res)=>{
    Restaurant.find()
    .limit(20)
    .then(rs=>{
        res.render("home", {restaurants:rs});
    })  
})

app.get("/:id", (req,res)=>{
    Restaurant.findById(req.params.id)
    .then(restaurant=>{
        res.render("detail", restaurant);
    })
})

//listen
app.listen(3000, e=>console.log("escuchando"));
