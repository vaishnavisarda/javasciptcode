 let http = require('http');
 let server= http.createServer(function(request,response){
     //all requests handles here
     if(request.url=='/'){ //application routes
     response.write("Welcome to my HTTP server");
     response.end();
     }
     if(request.url =='/products'){ //application routes
        if(request.method =='GET'){
         response.write("Products Information");
         response.end();
        }
     }

 });

 server.listen(3000,()=>{
     console.log("Server listening on 3000");
 })