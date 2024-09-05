import mongodb from "mongodb";

const localDBURL = "127.0.0.1:27017";

const DBName = "Router-Test";
const cloudURL = "mongodb+srv://sathishkumarannadurai12:8nlpWyxHsUoSjuDt@cluster0.2uuv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 

// export const client = new mongodb.MongoClient(`mongodb://${localDBURL}`); 
//cloud connections
export const client = new mongodb.MongoClient(cloudURL); 

//Cloud Details sathishkumarannadurai12   8nlpWyxHsUoSjuDt



export const db = client.db(DBName);

export const ConnectToDB = async ()=>{
    try{
        await client.connect();
        console.log("DB Connected");
    }catch(e){
        console.log("Error:",e);
        process.exit();
    }
}