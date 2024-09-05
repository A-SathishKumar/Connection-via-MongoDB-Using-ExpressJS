import mongoose from "mongoose";

const host = "127.0.0.1:27017";

const DBName = "Router-Test";

const cloudURL = `mongodb+srv://sathishkumarannadurai12:8nlpWyxHsUoSjuDt@cluster0.2uuv1.mongodb.net/${DBName}?retryWrites=true&w=majority&appName=Cluster0`

const localDBURL = `mongodb://${host}/${DBName}`;

export const ConnectviaMongoose = async () =>{
    try{
        await mongoose.connect(cloudURL);
        console.log("Connected to Monogoose Succesfully!!!");
    }catch(e){
        console.log("Error: ",e);
        process.exit(1);
    }
};