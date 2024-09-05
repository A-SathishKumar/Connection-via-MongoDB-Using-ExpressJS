import http from 'http'

const server = http.createServer((request,response)=>{
    //** Basic Server Creation **

    // response.end(JSON.stringify({ msg: "Hello World" }));
    // response.end("hello world");
     
    //** Creation with Different Method **/
    const method = request.method;
    if(method === "GET"){
        response.end(JSON.stringify({tex:"From Get method"}));
    }else if(method === "POST"){
        response.statusCode = 201;
        response.end(JSON.stringify({test:"from POST method"}));
    }
});

const PORT = 4500;

server.listen(PORT,()=>{
    console.log("Server is listing on",PORT);
})