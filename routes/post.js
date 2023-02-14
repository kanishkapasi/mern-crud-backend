// require express
const express=require("express");
const { restart } = require("nodemon");

// require our new schema (post.js)
const Posts=require('../module/post');

// Import express router
const router=express.Router();

// Save Posts
router.post('/posts/save',(req,res)=>{
    
    let newPost=new Posts(req.body)

    newPost.save((err)=>{
        if(err){
            res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

// Get Posts

router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

// Update post using put req

router.put('/posts/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
            // Access to the all of body to update to client
        },
        (err,post)=>{
            if(err){
                res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                updated:"Successfully",post
            });
        }
    );
});

// Delete using delete method

router.delete('/posts/delete/:id',(req,res)=>{
    Posts.findByIdAndDelete(req.params.id).exec((err,deletePosts)=>{
        if(err){
            res.status(400).json({
                message:"Delete unsuccessfull",err
            });
        }
        return res.status(200).json({
            message:"Delete Successfull",deletePosts 
        });
    });
});

// exporting module
module.exports= router;