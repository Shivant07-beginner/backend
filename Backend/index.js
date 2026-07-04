const http = require('http');
const PORT = 3000;
const  server = http.createServer(async (req, res) =>{
    console.log("Request recived");
     if(req.method == "GET"){
        res.end("hello")
     }else if(req.method == "POST"){
        res.end("kya haal party")
     }else{
        res.end("sub badiya");
     }
});

server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})