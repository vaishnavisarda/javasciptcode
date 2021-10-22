let express = require('express')
let app= new express();

app.get('/products',(req,res)=>{
    res.send("Welcome to my Express Application");
})

app.post('/products',(req,res)=>{
    res.send("Products Information");
})
app.get('/contacts',(req,res)=>{
    res.send("Contacts Information");
})

app.listen(3000,()=>{
    console.log("Server listening on 3000");
})
