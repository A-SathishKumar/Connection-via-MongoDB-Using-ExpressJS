import {CreateFile,getFiles} from "./index.js";

//CreateFile("./other","test.txt","test");
//create the file named as a data & time with the content of the time;
const data = new Date();
const timestramp = data.getTime().toString();
const isoDatatime = data.toISOString().replaceAll(":","-");

CreateFile("./files",`${isoDatatime}.txt`,timestramp);
//getFiles("./others");