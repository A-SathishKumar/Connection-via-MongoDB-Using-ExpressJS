import express from "express";
import {getFiles, CreateFile} from "./index.js";

const server = express();

//server.use(express.json());

server.post("/create-file",(req,res)=>{
    const data = new Date();
    const timestramp = data.getTime().toString();
    const isotime = data.toISOString().replace(":","-");
    CreateFile("./api-files",`${isotime}.txt`,timestramp,()=>{
        res.status(201).json({msg:"file created Successfully"});
    });
});

server.get("/get-files",(req,res)=>{
    getFiles("./api-files",(data)=> res.json(data),()=>res.status(500).json({msg:"Somthing Went Wrong!!!"}))
})


const PORT = 4500;
server.listen(PORT,()=>{
    console.log("Server Listen to:",PORT );
})