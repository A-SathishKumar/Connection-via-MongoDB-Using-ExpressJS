import { model,Schema } from "mongoose";

const postSchema = new Schema({
    id:{
        type:"string",
        required:true,
    },
    image:{
        type:"string",
        required:true,
    },
    caption:{
        type:"string",
        required:true,
    },
    userid:{
        type:"string",
        required:true,   
    },
    likes:{
        type:"number",
        required:true
    }
});

export const postModel = new model("post",postSchema,"posts");