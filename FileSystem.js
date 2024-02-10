
const http=require('http');
const fs=require('fs');
const { error } = require('console');
http.createServer((req,resp)=>{
    fs.readFile("fs.html",(err,data)=>{
        resp.writeHead(200,{'Content-Type':'text/html'});
        resp.write(data);
        resp.end()
    })
}).listen(9990);

// Now create and append a new file

fs.appendFile("append.txt",'This is a txt file and this data is append to it',(err)=>{
    if (err) throw error
    console.log("Save it")
})


//   for Writte a file


fs.writeFile('write.txt','Now i am writing second time',(err)=>{
    if(err) throw error
    console.log("save it")
})


// to delete a file

fs.unlink('myfile.txt',(err)=>{
    if(err) throw error
    console.log("worked")
})



// to rename a file

fs.rename("write.txt","writing.txt",(err)=>{

})
