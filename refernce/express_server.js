let express = require('express');
let  morgan = require('morgan');
let app = new express();
app.use(morgan('dev')); //set middlewares
app.use(express.static('public')); //serve all static content from
app.get('/',(req,res)=>{
 // res.send("Welcome to my Express Application"); // send Text response
    res.sendFile('index.html');  //pass contents of the file to the browser
})
function getProducts(req,res,next){
    //let id = req.query.id;
let products =['laptop','computer','tablets']; //db call
req.products = products; //pass data to next handler
next(); //next handler in line

}
app.get('/products',getProducts,(req,res,next)=>{
    //search the db for a record with id = 23
    res.send("Products Infomation for"+req.products);
})

app.post('/products',(req,res)=>{
    res.send("Added a new Product");
})

app.use((req,res,next) =>{
    res.status(404).send('Path not found');
})

app.get('/contacts',(req,res)=>{
    res.send("Contacts Information");
})

app.listen(3000,()=>{
    console.log("Server listening on 3000");

})





