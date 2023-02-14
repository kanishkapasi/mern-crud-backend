const mongoose=require("mongoose");

// create new mongoose schema
const postSchema=new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postCatogery:{
        type:String,
        required:true
    }

});

// exporting this module
module.exports=mongoose.model("Posts",postSchema);