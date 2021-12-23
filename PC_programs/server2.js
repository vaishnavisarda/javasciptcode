let express = require('express'); // Include ExpressJS
let app = express();
let morgan = require('morgan');

let m = morgan('combined');
app.use(m)

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false}))

// app.use((req,res,next) =>{
//     res.sendFile(__dirname +'/prog1.html');
// })



app.use((req,res,next) =>{
    res.sendFile(__dirname +'/Demo1.html');
})

// app.use((req,res,next) =>{
//     res.sendFile(__dirname +'/Demo2.html');
// })


let port = 3005
app.listen(port,() =>
console.log(`This will listen on port ${port}`));