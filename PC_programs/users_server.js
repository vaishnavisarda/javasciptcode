let express = require('express'); // Include ExpressJS
let app = express();
let morgan = require('morgan');
let m = morgan('combined');

app.use(m)
app.use(express.json())

let user = {};
//  /users/userId
app.get('/users/:userId', (req, res, next) => {
    console.log("Userid is in path param", req.params.userId);
    console.log("Firstname is in query param", req.query.firstname);
    if ((req.params.userId == user.id) && (user.firstname == req.query.firstname)) {
        console.log(user);
        res.send(user);
    } else {
        res.status(404)
        res.send({
            status: 404,
            message: "User not found"
        })
    }
});

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
    };

    res.status(200)
    res.setHeader("Content-Type", "application/json");
    //res.send(`Firstname: ${firstname} Lastname:${lastname} Email Id:${emailid} Mobile No:${mobileno}`);
    res.send(user);
});

app.put('/users/:userId', (req, res, next) => {
    console.log("userId :", req.params.userId);
    if (req.params.userId == user.id) {

        console.log("Before PUT", user);
     
        let firstname = req.body.Firstname;
        let lastname = req.body.Lastname;
        let emailid = req.body.Emailid;
        let mobileno = req.body.Mobileno;

       if(firstname!=undefined){
           user.firstname=firstname;
       }
       if(lastname!=undefined){
         user.lastname= lastname;
       }
        if(emailid!=undefined){
           user.emailid=emailid;
       }
        if(mobileno!=undefined){
         user.mobileno = mobileno;
       }
       else{

           user;
       }
        // user.firstname =firstname;
        // user.lastname=lastname;
      
        //console.log(myfirstname);

       

        // user = {
        //     id: 1,
        //     firstname: firstname,
        //     lastname: lastname,
        //     emailid: emailid,
        //     mobileno: mobileno
        // }

        console.log("After PUT", user);
        console.log("data updated successfully");
        //res.send(user);
    }
    else {
        res.status(404);
        res.setHeader("Content-Type", "application/json");
        res.send({
            message: "User Not Found"
        })

    }
})

app.delete('/users/:userId', (req, res, next) => {
    console.log("userId :", req.params.userId);
    if (req.params.userId == user.id) {
        console.log("User deleted succussefully");
        user = {

        }
        res.status(200);
        res.setHeader("Content-Type", "application/json");
        res.send(user);
    }

    else {
        res.status(404);
        res.setHeader("Content-Type", "application/json");
        res.send({
            message: "User Not Found"

        })

    }
})


let port = 3003
app.listen(port, () =>
    console.log(`This will listen on port ${port}`));
