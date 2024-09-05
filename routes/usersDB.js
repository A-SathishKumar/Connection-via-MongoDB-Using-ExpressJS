import express from "express";
import {db} from "../db-utils/db.connections.js";
import {v4} from "uuid";
const userRouter = express.Router();

const usersCollections = db.collection("users");

//Get All The Data
userRouter.get("/",async (req,res)=>{

    const userData = await usersCollections.find({},{projection:{_id:0}}).toArray();
    res.json(userData);
})

//Add the Data
userRouter.post("/",async (req,res)=>{
    const userData = req.body;
    const userDetails = await usersCollections.findOne({email: userData.email})
    if(userDetails){
        res.status(404).json({msg:"User Already Exists"});
    }else{
        await usersCollections.insertOne({
            ...userData,
            id:v4(),
        })

        res.json({msg:"User Data Added Successfully"});
    }
})

//Update the Data

userRouter.put("/:id",async (req,res)=>{
    const {id} = req.params;
    const UserData = req.body;
    const User = await usersCollections.findOne({id});
    if(User){
        await usersCollections.updateOne(
            {id},
            {
                $set:{
                ...UserData,
            },
            }
        );
        res.json({msg:"User updated Successfully!!!"});
    }else{
        res.body({msg:"User Not Found"});
    }
})

//Delete the Data

userRouter.delete("/",async (req,res)=>{
    const UserId = req.query.id;
    const User = await usersCollections.findOne({id:UserId});
    if(User){
        await usersCollections.deleteOne({id:UserId});
        res.json({msg:"User Deleted Successfully!!!"});
    }else{
        res.status(404).json({msg:"User Not Found!!!"});
    }
})

export default userRouter;