let express = require('express'); // Include ExpressJS
let app = express();
let morgan = require('morgan');
// let cors = require('cors');
// let config = require('./config');
// let path = require('path');
// let firebase = require('firebase');
// let routes = require('./routes');



let m = morgan('combined');
app.use(m)

let bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended:false}))
app.use(express.json())

let user = undefined;

app.use((req, res, next) => {
    console.log(`${(new Date()).toISOString()} Received ${req.method} -> ${req.url}`);
    next();
})

app.use("*", (req, res, next) => {
    console.log("When will it be called");
    next();
});

app.get("/hang", (req, res, next) => {
    console.log("hung");
    res.send("hung")
    //next();
})

app.use("/view*", (req, res, next) => {
    console.log("view");
    next();
});

app.use('/Register', (req, res, next) => {
    console.log("use  /Register")
    next();
})

app.get('/users/:userId', (req, res, next) => {
    console.log("Userid is in path param", req.params.userId);
    console.log("Firstname is in query param", req.query.firstname);
    if ((req.params.userId == user.id) && (user.firstname == req.query.firstname)) {
        res.send(user);
    } else {
        res.status(404)
        res.send({
            status: 404,
            message: "User not found"
        })
    }
});
// let fb = firebase.initializeApp(config.firebaseConfig);
// let db = firebase.firestore(fb);

// app.use('/Register', router)
app.post('/users', (req, res) => {
    console.log("Creating User");
    let firstname = req.body.Firstname;
    let lastname = req.body.Lastname;
    let emailid = req.body.Emailid;
    let mobileno = req.body.Mobileno;
    user = {
        id: 1,
        firstname,
        lastname,
        emailid,
        mobileno
    }

    res.status(200)
    res.setHeader("Content-Type", "application/json");
    //res.send(`Firstname: ${firstname} Lastname:${lastname} Email Id:${emailid} Mobile No:${mobileno}`);
    res.send(user);
});

app.get('/view_user_info', (req, res) => {
    console.log("Hello view user info");
    res.send({
        "Hello": "This is view_user_info page",
        firstname,
        lastname,
        mobileno,
        emailid
    })

    
})

app.get('/view_info', (req, res) => {
    console.log("view info");
    res.send({});
})

app.use((req, res) => {
    console.log("default handler");
    res.send("default");
});



let port = 3003
app.listen(port, () =>
    console.log(`This will listen on port ${port}`));
