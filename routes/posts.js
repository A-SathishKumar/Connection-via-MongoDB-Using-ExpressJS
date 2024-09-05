import express from "express";
import { postModel } from "../db-utils/model.js";
import mongoose from "mongoose";
import {v4} from "uuid";


const postRouter = express.Router();

postRouter.get("/",async (req,res)=>{
    const posts = await postModel.find({});
    res.json({posts});
})

postRouter.post("/",async (req,res)=>{
    const postsData = req.body;
    const postObj = new postModel({
        ...postsData,
        id:v4(),
        likes:0,
    }); 
    try{
        await postObj.save();
        res.json({msg:"Post add Successfully"});
    }catch(e){
        if(e instanceof mongoose.Error.ValidationError){
            res.status(400).json({msg:"Please check the Data"});
        }else{
            res.status(500).json({msg:"Internal Error"});
        }
       
    }
})



export default postRouter;