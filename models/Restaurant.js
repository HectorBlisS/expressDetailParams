const mongoose = require("mongoose");

module.exports = mongoose.model("Restaurant", {
    //address:String,
    borough:String,
    cuisine:String,
    grades:[String],
    name:String,
    restaurant_id:String,
    stars:Number,
    reviews:Number,
    tags:[String]
})