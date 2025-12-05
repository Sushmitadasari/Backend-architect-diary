import http from 'http';

const server=http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url==='/users'){
        res.writeHead(200,{'Content-Type':'application/json'});
        const users=[
            {name:'Sushmita',age:24},
            {name:'Sri',age:30}
        ];
        res.end(JSON.stringify(users));
        return;
    }
    else if(req.url==='/products'){
        res.writeHead(200,{'Content-Type':'application/json'});
        const products=[
            {name:'Laptop',price:1000},
            {name:'Phone',price:500}
        ];
        res.end(JSON.stringify(products));
        return;
    }   
    
    else{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello, this is from backend server\n');
    }
});

server.listen(5001,()=>{
    console.log('server running on port ${5001}')
})

