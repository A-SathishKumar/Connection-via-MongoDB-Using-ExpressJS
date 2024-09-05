import express from "express";
import {v4} from "uuid";

const teacherRouter = express.Router();

const teachers = [];

teacherRouter.get("/",(req,res)=>{
    res.json(teachers);
});

teacherRouter.post("/",(req,res)=>{
    const tdata = req.body;
    const teaData = {
        id:v4(),
        ...tdata
    };
    teachers.push(teaData);
    res.status(201).json({msg:"Teachers Data Created Successfully!!!"});
});

teacherRouter.get("/:id",(req,res)=>{
    const tId = req.params.id;
    const tData = teachers.find((data)=> data.id === tId);
    if(tData){
        res.json(tData);
    }else{
        res.json({msg:"No data Exists"});
    }
});

export default teacherRouter;