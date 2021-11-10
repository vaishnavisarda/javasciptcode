let eventemitter = require('events').EventEmitter;
let myemitter = new eventemitter();
let counter=0;
myemitter.on('move',(value)=>{
    console.log("moving ....with values"+value);
})

setInterval(()=>{
    myemitter.emit('move',10); //trigger the event
},2000)