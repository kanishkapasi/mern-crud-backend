// Import express
const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");

// Use cors and body-parser
app.use(cors());
app.use(bodyParser.json())

// importing routes files
const routePosts=require('./routes/post');

// Using routes files
app.use(routePosts);

// Import Mongoose
const mongoose=require("mongoose");

// Give the port for server
const PORT=8000;
const DB_URL="mongodb+srv://pasi:pasi1234@cluster0.txxk5kx.mongodb.net/mernCrud?retryWrites=true&w=majority";

// Write Connection
mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB is connected");
})
.catch((err)=>{
    console.log("DB is not connected",err)
})


// Server Runing
app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});
