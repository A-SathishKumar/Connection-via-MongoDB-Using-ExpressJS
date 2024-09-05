import express from "express";
import {v4} from "uuid";


const StudentRouter = express.Router();
//Create Students API

//Get the Students
const Students = [];
StudentRouter.get("/",(req,res)=>{
    res.json(Students);
})

//Add the Students

StudentRouter.post("/",(req,res)=>{
    const getdata = req.body;
    const stuData = {
        id:v4(),
        ...getdata
    };
    Students.push(stuData);
    res.status(201).json({msg:"Students Data Created Successfully"});
})

//Get the single Students

StudentRouter.get("/:id",(req,res)=>{
    const stuId = req.params.id;
    const student = Students.find((data)=> data.id === stuId);
    if(student){
        res.json(student);
    }else{
        res.json({msg:"User not Found"});
    }
})

//delete the students

StudentRouter.delete("/",(req,res)=>{
    const {id} = req.query;
    const StudentIndex = Students.findIndex((data)=> data.id === id);
    if(StudentIndex != -1){
        Students.splice(StudentIndex,1);
        res.json({msg:"User Data Deleted Successfully"});
    }else{
        res.status(404).json({msg:"User Not Found"});
    }
})

//update the students

StudentRouter.put("/:id",(req,res)=>{
    const updateId = req.params.id;
    const UpdateData = req.body;
    const User = Students.findIndex((data)=>data.id === updateId);
    if(User != -1){
        Students[User] = {
            updateId,
            ...UpdateData
        }
        res.json({msg:"User Updated Successfully!!!"});
    }else{
        res.status(404).json({msg:"User Not Found"});
    }
})

export default StudentRouter;