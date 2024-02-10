const http=require('http');             //modules
var data=require('./data')

// http.createServer((req,resp)=>{
//     resp.writeHead(200, {'Content-Type': 'text/html'});
//     resp.end("Mudasir")
// }).listen(9090)

// create your own modules and use it 

const dt=require('./firstmodule');

http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-Type":'text/html'})
    resp.write("Time and date is"+dt.mydatetime());
    resp.end();
}).listen(9090);