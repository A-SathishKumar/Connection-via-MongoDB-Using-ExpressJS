import fs from "fs";
export const CreateFile = ( filepath,FileName,FileContect,cbfn = () => {})=>{
    if(!fs.existsSync(filepath)){
        fs.mkdir(filepath,()=>{
            console.log("Folder created successfully");
        });
    }
    fs.writeFile(`${filepath}/${FileName}`,FileContect,cbfn);
}

export const getFiles = (Folderpth,successfn,errorfn)=>{
    fs.readdir(Folderpth,(err,data)=>{
        if(err){
            errorfn();
        }else successfn(data);
    })
}

//getFiles("./others");
//CreateFile("./others","testFile.txt","this is test msg");