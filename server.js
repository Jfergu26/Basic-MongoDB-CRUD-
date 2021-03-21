//In this file we will create the connection to our database and start our server

const express = require('express')
const mongoose = require('mongoose')
const ClickCounter = require('./Models/ClickModel')
const path = require('path')
const Clicksjs =  require('./Routes/Click');


const app = express()
const port = process.env.PORT || 3000
//
//insert uri link here
//
let count;

app.listen(port, () => {
    console.log(`Listening at port:${port}`)
})


app.use("/Routes" , Clicksjs);


mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected..')
})
.catch(err => console.log(err))

app.get('/', (req,res) =>{
    const query =  ClickCounter.findById('604518a929ed220a5b4e69ae')
        query
        .exec(function(err,clicks){
            if(err){
                res.send('error has occured');
            }
            else{
                // the value is saved to count
                console.log(clicks);
                res.sendFile(path.join(__dirname + '/index.html'))
                count = clicks.clicked
                console.log(count)
            }
        })
      
})


exports.count = count;