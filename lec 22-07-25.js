//posix -portable operating system interface
//async and await-promise
//unlink- deleting a file
//callback -last argument is the running function
//async method-block the thread
//encoding UTF-8 
//signal-to the function to stop or run
//////////////////////////////////////////////httpsmodules

// const http=require("node");

// const server=HTMLOutputElement.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'plan/text'});
//     res.end("DATA FETCHED RESPONSE SEND");
// })

// server.listen(8000,()=>{
//     console.log("YOUR SERVER RUNNNG ON PORT 8000");
// })
const http = require("node:http");

const blogPost = {
    blogTitle: "THIS IS TITLE OF BLOG",
    blogDescription: "THIS IS DESCRIPTION OF BLOG",
    authorBlog: "AUTHOR NAME"
};

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(blogPost));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

