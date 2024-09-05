import express  from "express";
import StudentRouter from "./routes/students.js";
import teacherRouter from "./routes/teachers.js";
import { ConnectToDB } from "./db-utils/db.connections.js";
import {ConnectviaMongoose} from "./db-utils/mongoose.connections.js"; 
import postRouter from "./routes/posts.js";


import userRouter from "./routes/usersDB.js"; 

const server = express();

server.use(express.json());

//Simple GET 
server.get("/",(request,response)=>{
    response.json({msg:"from EXPRESS GET method"});
})

//Simple POST
server.post("/",(request,response)=>{
    console.log("msg from client:",request.body);
    response.status(201).json({msg:"From Express POST method"});
});

//By using Router linking the router into server  
server.use("/students",StudentRouter);
server.use('/teacher',teacherRouter);
server.use('/users',userRouter);
server.use('/posts',postRouter);

const PORT = 4500;

//Method 1

// ConnectToDB().then(()=>{
//     server.listen(PORT,()=>{
//     console.log("Server Listing on ",PORT);
//     })
// }).catch((e)=>{
//     console.log("Error:",e);
// })

// Method 2 Top Level Await

await ConnectToDB();
await ConnectviaMongoose();

server.listen(PORT,()=>{
    console.log("Server Listing on ",PORT);
})